var util = require('util');
var EventEmitter = require('events').EventEmitter;

const Colr = require('colr');

function RGB() {
    this.hue = 0;
    this.saturation = 0;
    this.brightness = 0;
    this.timeout = null;
}

RGB.prototype.update = function(){
    // 清除舊的 timeout
    if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
    }

    let that = this;
    this.timeout = setTimeout(function() {
        that.emit('update', that.getArray());
    }, 3);
}

RGB.prototype.setHue = function (hue) {
    this.hue = hue;
    this.update();
}

RGB.prototype.setSaturation = function (saturation) {
    this.saturation = saturation;
    this.update();
}

RGB.prototype.setBrightness = function (brightness) {
    this.brightness = brightness;
    this.update();
}

RGB.prototype.getArray = function () {
    return Colr().fromHsl(this.hue, this.saturation, this.brightness).toRgbArray();
}

util.inherits(RGB, EventEmitter);
module.exports = RGB;