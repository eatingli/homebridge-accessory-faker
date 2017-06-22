function factory(Service, Characteristic) {
    const service = new Service.Door('Hello Door');

    service.getCharacteristic(Characteristic.CurrentPosition)
    service.getCharacteristic(Characteristic.PositionState)
    service.getCharacteristic(Characteristic.TargetPosition)

    service.addCharacteristic(new Characteristic.HoldPosition())
    service.addCharacteristic(new Characteristic.ObstructionDetected())

    return service
}


module.exports = factory