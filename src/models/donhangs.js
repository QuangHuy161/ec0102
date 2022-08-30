const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const donhangs = new Schema({
    MaDH: String,
    NgayMua : Date,
    YeuCauGiao : String,
    PhiVanChuyen : Number,
    MaHTTT: String,
    MaNV: String,
    MaKH: String
});

module.exports = mongoose.model('donhangs',donhangs)