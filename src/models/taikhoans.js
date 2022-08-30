const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taikhoans = new Schema({
    MaTK: String,
    LoaiTK: Number,
    TenTK: String,
    MatKhau: String
});

module.exports = mongoose.model('taikhoans',taikhoans)
