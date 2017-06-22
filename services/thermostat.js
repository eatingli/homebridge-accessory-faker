function factory(Service, Characteristic) {
    const service = new Service.Thermostat('Hello Thermostat');

    service.getCharacteristic(Characteristic.CurrentHeatingCoolingState)
    service.getCharacteristic(Characteristic.TargetHeatingCoolingState)
    service.getCharacteristic(Characteristic.CurrentTemperature)
    service.getCharacteristic(Characteristic.TargetTemperature)
    service.getCharacteristic(Characteristic.TemperatureDisplayUnits)

    service.addCharacteristic(new Characteristic.CurrentRelativeHumidity())
    service.addCharacteristic(new Characteristic.TargetRelativeHumidity())
    service.addCharacteristic(new Characteristic.CoolingThresholdTemperature())
    service.addCharacteristic(new Characteristic.HeatingThresholdTemperature())



    return service
}


module.exports = factory