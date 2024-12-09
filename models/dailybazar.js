// models/DailyBazar.js
const mongoose = require('mongoose');

const dailyBazarSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  description: { type: String }
});

module.exports = mongoose.model('DailyBazar', dailyBazarSchema);
