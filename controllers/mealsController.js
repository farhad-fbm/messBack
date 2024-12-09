// mealsController.js

const Meal = require('../models/dailyMeal');

exports.getDailyAllMembersMeal = async (req, res) => {
  const { date, month, year } = req.params;

  try {
    const meals = await Meal.find({ date, month, year }); // Fetch data for the given day
    const result = meals.map((meal) => ({
      memberName: meal.membername,
      breakfast: meal.breakfast,
      lunch: meal.lunch,
      dinner: meal.dinner,
    }));
 
    res.status(200).json(result); // Return the array of objects
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch meal data', details: error.message });
  }
};

exports.getMonthlyMemberMeals = async (req, res) => {
  const { month, year, membername } = req.params;
  try {
    const meals = await Meal.find({month,year,membername});
    const result = meals.map((meal) => ({
      date: meal.date,
      breakfast: meal.breakfast,
      lunch: meal.lunch,
      dinner: meal.dinner,
    }));

    res.status(200).json(result); // Return the array of meal records
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch monthly meal data',
      details: error.message,
    });
  }
};




exports.updateMeal = async (req, res) => {
  const { date, month, year, membername } = req.params;
  console.log("Received Params:", { date, month, year, membername }); // Add logging here

  const { breakfast, lunch, dinner } = req.body;

  try {
    const updatedMeal = await Meal.findOneAndUpdate(
      { date: parseInt(date), month: parseInt(month), year: parseInt(year), membername },
      { breakfast, lunch, dinner },
      { new: true, upsert: true }
    );

    res.status(200).json(updatedMeal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
