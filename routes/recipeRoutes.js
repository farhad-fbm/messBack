// routes/recipeRoutes.js
const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

// Routes to handle recipes
router.get('/:date/:month/:year', recipesController.getRecipeByDate);
router.post('/', recipesController.addRecipe);
router.patch('/:id', recipesController.updateRecipe);

module.exports = router;
