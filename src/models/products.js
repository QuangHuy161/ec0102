const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const products = new Schema({
    MaSP: String,
    TenSP: String,
    GiaSP : Number,
    LoaiPhuKien : String,
    ChatLieu: String,
    CongDung: String,
    BaoGom: String,
    XuatXu: String
});

module.exports = mongoose.model('products',products)