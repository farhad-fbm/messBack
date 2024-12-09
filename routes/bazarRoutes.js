const express = require('express');
const {
  getAllBazar,
  addBazar,
  updateBazar,
  deleteBazar
} = require('../controllers/bazarController');

const router = express.Router();

// GET all bazar entries
router.get('/', getAllBazar);

// POST a new bazar entry
router.post('/', addBazar);

// PUT to update a bazar entry
router.put('/:id', updateBazar);

// DELETE a bazar entry
router.delete('/:id', deleteBazar);

module.exports = router;
