const port = '/dev/ttyUSB0';

/**
 * 
 */
const SerialPort = require('serialport');
const ser = new SerialPort(port, {
    baudRate: 9600,
});

ser.on('close', () => {
    process.exit();
})

/**
 * 
 */
const RGB = require('./rgb.js');
let color = new RGB();

color.on('update', (rgb) => {
    console.log('rgb: ', rgb);
    ser.write(Buffer.from(rgb));
})

function factory(Service, Characteristic) {
    const service = new Service.Lightbulb('Arduino RGB');

    service.getCharacteristic(Characteristic.On)
        .on('set', (value, callback) => {
            console.log('Set On ', value);
            if (value == false) {
                color.setBrightness(0);
            }
            callback();
        })

    service.addCharacteristic(new Characteristic.Brightness())
        .on('set', (value, callback) => {
            console.log('Set Brightness ', value);
            color.setBrightness(value);
            callback();
        })

    service.addCharacteristic(new Characteristic.Hue())
        .on('set', (value, callback) => {
            console.log('Set Hue ', value);
            color.setHue(value);
            color.setBrightness(40);
            callback();
        })

    service.addCharacteristic(new Characteristic.Saturation())
        .on('set', (value, callback) => {
            console.log('Set Saturation ', value);
            color.setSaturation(value);
            callback();
        })

    return service
}

module.exports = factory