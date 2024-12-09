//routes/mealRoutes.js

const express = require('express');
const router = express.Router();
const mealsController = require('../controllers/mealsController');


// Route to get daily all members' meal data
router.get('/dailyAllMembersMeal/:date/:month/:year', mealsController.getDailyAllMembersMeal);


// PUT: Update meal data for a specific date and user
router.put('/updateMeal/:date/:month/:year/:membername', mealsController.updateMeal);

// Route to get monthly meal data for a specific member
router.get('/monthlyMemberMeals/:month/:year/:membername', mealsController.getMonthlyMemberMeals);


module.exports = router;
