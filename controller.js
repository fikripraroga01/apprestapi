'use strict';

var response = require('./res');
var response = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API berjalan!")
};

