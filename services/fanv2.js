function factory(Service, Characteristic) {
    const service = new Service.Fanv2('Hello Fanv2');

    service.getCharacteristic(Characteristic.Active)

    service.addCharacteristic(new Characteristic.CurrentFanState())
    service.addCharacteristic(new Characteristic.TargetFanState())
    service.addCharacteristic(new Characteristic.LockPhysicalControls())
    service.addCharacteristic(new Characteristic.RotationDirection())
    service.addCharacteristic(new Characteristic.RotationSpeed())
    service.addCharacteristic(new Characteristic.SwingMode())



    return service
}


module.exports = factory