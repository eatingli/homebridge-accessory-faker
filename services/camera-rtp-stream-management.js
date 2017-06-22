function factory(Service, Characteristic) {
    const service = new Service.CameraRTPStreamManagement('Hello CameraRTPStreamManagement');

    service.getCharacteristic(Characteristic.SupportedVideoStreamConfiguration)
    service.getCharacteristic(Characteristic.SupportedAudioStreamConfiguration)
    service.getCharacteristic(Characteristic.SupportedRTPConfiguration)
    service.getCharacteristic(Characteristic.SelectedStreamConfiguration)
    service.getCharacteristic(Characteristic.StreamingStatus)
    service.getCharacteristic(Characteristic.SetupEndpoints)

    return service
}


module.exports = factory