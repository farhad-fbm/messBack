// models/dailyMeal.js

const mongoose = require('mongoose');

const dailyMealsSchema = new mongoose.Schema({
  date: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  membername: { type: String, required: true },
  breakfast: { type: Number, required: true },
  lunch: { type: Number, required: true },
  dinner: { type: Number, required: true }
});

module.exports = mongoose.model('DailyMeal', dailyMealsSchema);
