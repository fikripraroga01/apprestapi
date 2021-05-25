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

//menampilkan semua data barang berdasarkan KodeBarang
exports.tampilberdasarkankodebarang = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM barang WHERE KodeBarang = ?', [id],
        function (error, rows, fileds) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    );
};

//menambahkan data barang
exports.tambahBarang = function (req, res) {
    var NamaBarang = req.body.NamaBarang;
    var Harga = req.body.Harga;
    var Stok = req.body.Stok;

    connection.query('INSERT INTO barang (NamaBarang,Harga,Stok) VALUES(?,?,?)',
        [NamaBarang, Harga, Stok],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        }
    );
};

//mengubah data berdasarkan id
exports.ubahBarang = function (req, res) {
    var KodeBarang = req.body.KodeBarang;
    var NamaBarang = req.body.NamaBarang;
    var Harga = req.body.Harga;
    var Stok = req.body.Stok;

    connection.query('UPDATE barang SET NamaBarang=?, Harga=?, Stok=? WHERE KodeBarang=?',
        [NamaBarang, Harga, Stok, KodeBarang],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data!", res)
            }
        }
    );
};