function factory(Service, Characteristic) {
    const service = new Service.Lightbulb('Hello Lightbulb');
    
    service.getCharacteristic(Characteristic.On)

    service.addCharacteristic(new Characteristic.Brightness())
    service.addCharacteristic(new Characteristic.Hue())
    service.addCharacteristic(new Characteristic.Saturation())

    return service
}

module.exports = factory