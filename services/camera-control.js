function factory(Service, Characteristic) {
    const service = new Service.CameraControl('Hello CameraControl');

    service.getCharacteristic(Characteristic.On)


    service.addCharacteristic(new Characteristic.CurrentHorizontalTiltAngle())
    service.addCharacteristic(new Characteristic.CurrentVerticalTiltAngle())
    service.addCharacteristic(new Characteristic.TargetHorizontalTiltAngle())
    service.addCharacteristic(new Characteristic.TargetVerticalTiltAngle())
    service.addCharacteristic(new Characteristic.NightVision())
    service.addCharacteristic(new Characteristic.OpticalZoom())
    service.addCharacteristic(new Characteristic.DigitalZoom())
    service.addCharacteristic(new Characteristic.ImageRotation())
    service.addCharacteristic(new Characteristic.ImageMirroring())

    return service
}


module.exports = factory