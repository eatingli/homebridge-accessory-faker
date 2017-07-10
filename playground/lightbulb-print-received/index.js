function factory(Service, Characteristic) {
    const service = new Service.Lightbulb('lightbulb-print-received');
    
    service.getCharacteristic(Characteristic.On)
        .on('get', (callback) => {
            console.log('Get On ');
            callback(null, true);
        })
        .on('set', (value, callback) => {
            console.log('Set On ', value);
            callback();
        })

    service.addCharacteristic(new Characteristic.Brightness())
        .on('get', (callback) => {
            console.log('Get Brightness ');
            callback(null, 20);
        })
        .on('set', (value, callback) => {
            console.log('Set Brightness ', value);
            callback();
        })

    service.addCharacteristic(new Characteristic.Hue())
        .on('get', (callback) => {
            console.log('Get Hue ');
            callback(null, 60);
        })
        .on('set', (value, callback) => {
            console.log('Set Hue ', value);
            callback();
        })

    service.addCharacteristic(new Characteristic.Saturation())
        .on('get', (callback) => {
            console.log('Get Saturation ');
            callback(null, 20);
        })
        .on('set', (value, callback) => {
            console.log('Set Saturation ', value);
            callback();
        })

    return service
}

// service.getCharacteristic(Characteristic.On)
// 	.setValue(true);
// service.getCharacteristic(Characteristic.Brightness)
// 	.setValue(55);

module.exports = factory