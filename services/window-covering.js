function factory(Service, Characteristic) {
    const service = new Service.WindowCovering('Hello WindowCovering');

    service.getCharacteristic(Characteristic.CurrentPosition)
    service.getCharacteristic(Characteristic.TargetPosition)
    service.getCharacteristic(Characteristic.PositionState)

    service.addCharacteristic(new Characteristic.HoldPosition())
    service.addCharacteristic(new Characteristic.TargetHorizontalTiltAngle())
    service.addCharacteristic(new Characteristic.TargetVerticalTiltAngle())
    service.addCharacteristic(new Characteristic.CurrentHorizontalTiltAngle())
    service.addCharacteristic(new Characteristic.CurrentVerticalTiltAngle())
    service.addCharacteristic(new Characteristic.ObstructionDetected())

    return service
}


module.exports = factory