/**
 *  在這選用./service 或 ./playground中的Factory，來改變此專案的Accessory Type。
 * ./service 實作無任何功能，單純能在iOS App上展現介面。
 * ./playground 實作一些特定的功能，像是將接收到的控制訊號顯示在終端機，甚至透過serialport控制其他裝置。
 */

const factory = require('./playground/arduino-rgb/index.js');
// const factory = require('./playground/lightbulb-print-received/index.js');

// const factory = require('./services/lightbulb.js');
// const factory = require('./services/camera-control.js');
// const factory = require('./services/camera-rtp-stream-management.js');
// const factory = require('./services/thermostat.js');
// const factory = require('./services/fanv2.js');
// const factory = require('./services/fan.js');
// const factory = require('./services/door.js');
// const factory = require('./services/air-quality-sensor.js');
// const factory = require('./services/stateful-programmable-switch.js');
// const factory = require('./services/window-covering.js');

module.exports = function (homebridge) {
	const {
		Service,
		Characteristic
	} = homebridge.hap

	/**
	 * accessoryInformation
	 */
	let accessoryInformation = new Service.AccessoryInformation();
	accessoryInformation
		.setCharacteristic(Characteristic.Manufacturer, "Made In Taiwan")
		.setCharacteristic(Characteristic.Model, "1.0")
		.setCharacteristic(Characteristic.SerialNumber, "33333333");
	
	/**
	 * Faker
	 */
	let Faker = function (log, config) {}

	Faker.prototype.identify = function (callback) {
		callback();
	}

	Faker.prototype.getServices = function () {
		let service = factory(Service, Characteristic);
		return [accessoryInformation, service];
	}

	/**
	 * registerAccessory
	 */
	homebridge.registerAccessory("accessory-faker", "homebridge-accessory-faker", Faker);
}