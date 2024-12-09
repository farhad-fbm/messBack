const express = require('express');
const Member = require('../models/member');
const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    const member = await Member.findOne({ name });
    if (!member || member.password !== password) {
      return res.status(401).json({ message: 'Invalid name or password.' });
    }
    res.status(200).json({ message: 'Login successful', member });
    console.log(member);
    
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


// Middleware to protect routes
const authMiddleware = (req, res, next) => {
  const { userId } = req.headers; // Pass userId in headers for simplicity
  if (!userId) {
    return res.status(403).json({ message: 'Access denied' });
  }

  next(); // Proceed to the next middleware/route
};

// Example of a protected route
router.get('/protected', authMiddleware, async (req, res) => {
  try {
    const member = await Member.findById(req.headers.userId);
    if (!member) {
      return res.status(403).json({ message: 'Invalid user.' });
    }

    res.status(200).json({ message: 'Authorized', member });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
