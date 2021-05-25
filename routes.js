'use-strict'

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);


    app.route('/tampil')
        .get(jsonku.tampilsemuabarang);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkankodebarang);

    app.route('/tambah')
        .post(jsonku.tambahBarang)
}