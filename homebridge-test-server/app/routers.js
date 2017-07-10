const express = require('express');
const routers = express.Router();

// const port = 'COM3';
const port = '/dev/ttyUSB0'

/**
 * 
 */
const SerialPort = require('serialport');
const ser = new SerialPort(port, {
    baudRate: 9600,
});

routers.get('/', function (req, res) {
    res.send('Hello World!');
});

routers.get('/status', function (req, res) {
    res.send('87');
});

routers.get('/on', function (req, res) {
    res.send('87');
    console.log(Buffer.alloc(1, 'a'));
    ser.write(Buffer.alloc(1, 'a'));
});

routers.get('/off', function (req, res) {
    res.send('87');
    ser.write(Buffer.alloc(1, 'b'));
});

routers.get('/brightness/:value', function (req, res) {
    res.send('87');
    // req.params.value
});

routers.get('/brightness', function (req, res) {
    res.send('87');
});

module.exports = routers;