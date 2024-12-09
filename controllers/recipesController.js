// controllers/recipesController.js
const Recipe = require('../models/recipe');

// Get recipe by date
exports.getRecipeByDate = async (req, res) => {
  const { date, month, year } = req.params;

  try {
    const recipe = await Recipe.findOne({ date: parseInt(date), month: parseInt(month), year: parseInt(year) });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found for the specified date.' });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new recipe
exports.addRecipe = async (req, res) => {
  const { date, month, year, breakfast, lunch, dinner } = req.body;

  try {
    const newRecipe = new Recipe({ date, month, year, breakfast, lunch, dinner });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    if (error.code === 11000) { // MongoDB duplicate key error
      res.status(400).json({ message: 'Recipe for this date already exists.' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};


// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { breakfast, lunch, dinner } = req.body;

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { breakfast, lunch, dinner },
      { new: true }
    );
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
