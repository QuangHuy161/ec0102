const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const khachhangs = new Schema({
    MaKH: String,
    TenNV: String,
    DiaChi: String,
    SDT: String,
    Email: String,
    MaTK: String
});

module.exports = mongoose.model('khachhangs',khachhangs)