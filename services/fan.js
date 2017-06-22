function factory(Service, Characteristic) {
    const service = new Service.Fan('Hello Fan');

    service.getCharacteristic(Characteristic.On)

    service.addCharacteristic(new Characteristic.RotationDirection())
    service.addCharacteristic(new Characteristic.RotationSpeed())

    return service
}


module.exports = factory