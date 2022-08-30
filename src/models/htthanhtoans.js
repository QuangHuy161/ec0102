const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const htthanhtoans = new Schema({
    TenHT : String,
    MaHTTT : String
});

module.exports = mongoose.model('htthanhtoans',htthanhtoans)