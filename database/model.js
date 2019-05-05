const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  txHash: String,
  time: Number,
  inputs: Array,
  outputs: Array,
  block: Number,
  txName: String,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
