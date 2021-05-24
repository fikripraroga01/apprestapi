'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API berjalan!", res)
};


//menampilkan semua data barang
exports.tampilsemuabarang = function (req, res) {
    connection.query('SELECT * FROM barang', function (error, rows, fileds) {
        if (error) {
            connection.log(error);

        } else {
            response.ok(rows, res)
        }
    });
};