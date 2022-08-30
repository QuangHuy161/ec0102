const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const chitietdonhangs = new Schema({
    MaDH : String,
    MaCT: String,
    TenSP: String,
    SL : Number
  
});

module.exports = mongoose.model('chitietdonhangs',chitietdonhangs)