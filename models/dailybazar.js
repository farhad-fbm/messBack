const mongoose = require('mongoose');

const dailyBazarSchema = new mongoose.Schema({
  date: { type: Number, required: true }, // Day of the month
  month: { type: Number, required: true }, // Month (1-12)
  year: { type: Number, required: true }, // Year
  info: { type: String, required: true }, // Description of the bazar
  tk: { type: Number, required: true }, // Amount spent
}, { timestamps: true });

module.exports = mongoose.model('DailyBazar', dailyBazarSchema);
