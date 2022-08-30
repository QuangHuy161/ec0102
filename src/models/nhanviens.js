const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const nhanviens = new Schema({
    MaNV  :  String,
    TenNV :  String,
    CMND  :  String,
    DiaChi:  String,
    SDT   :  String,
    Email :  String,
    MaCN  :  String,
    MaTK  :  String,
});

module.exports = mongoose.model('nhanviens',nhanviens)