function factory(Service, Characteristic) {
    const service = new Service.StatefulProgrammableSwitch('Hello StatefulProgrammableSwitch');

    service.getCharacteristic(Characteristic.ProgrammableSwitchEvent)
    service.getCharacteristic(Characteristic.ProgrammableSwitchOutputState)    


    return service
}


module.exports = factory