const SerialPort = require('serialport');
const ser = new SerialPort('COM3', {
    baudRate: 9600,
});


ser.on('open', function () {
    ser.write('a');
    // ser.close();
});



const Light = {}

Light.init = (COM) => {
    Light.ser = new SerialPort('COM3', {
        baudRate: 9600,
    });
}

Light.on = () => {
    Light.ser.write('a', function () {
        Light.ser.drain();
    });
}

Light.off = () => {
    Light.ser.write('b', function () {
        Light.ser.drain();
    });
}