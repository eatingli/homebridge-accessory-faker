function factory(Service, Characteristic) {
    const service = new Service.AirQualitySensor('Hello AirQualitySensor');

    service.getCharacteristic(Characteristic.AirQuality)


    service.addCharacteristic(new Characteristic.StatusActive())
    service.addCharacteristic(new Characteristic.StatusFault())
    service.addCharacteristic(new Characteristic.StatusTampered())
    service.addCharacteristic(new Characteristic.StatusLowBattery())

    service.addCharacteristic(new Characteristic.OzoneDensity())
    service.addCharacteristic(new Characteristic.NitrogenDioxideDensity())
    service.addCharacteristic(new Characteristic.SulphurDioxideDensity())
    service.addCharacteristic(new Characteristic.PM2_5Density())
    service.addCharacteristic(new Characteristic.PM10Density())
    service.addCharacteristic(new Characteristic.VOCDensity())
    service.addCharacteristic(new Characteristic.CarbonMonoxideLevel())
    service.addCharacteristic(new Characteristic.CarbonDioxideLevel())

    return service
}


module.exports = factory