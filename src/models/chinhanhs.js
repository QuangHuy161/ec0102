const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ChiNhanh = new Schema({
  MaCN: String,
  DiaChiCN: String,
  SDT: String,
});

module.exports = mongoose.model('ChiNhanh',ChiNhanh)