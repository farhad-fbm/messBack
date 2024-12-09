const DailyBazar = require('../models/dailybazar');

// Get all bazar entries
exports.getAllBazar = async (req, res) => {
  try {
    const bazarList = await DailyBazar.find();
    res.status(200).json(bazarList);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bazar data' });
  }
};

// Add a new bazar entry
exports.addBazar = async (req, res) => {
  const { date, month, year, info, tk } = req.body;

  try {
    const newBazar = new DailyBazar({ date, month, year, info, tk });
    await newBazar.save();
    res.status(201).json({ message: 'Bazar entry added successfully', bazar: newBazar });
  } catch (error) {
    res.status(400).json({ error: 'Failed to add bazar entry' });
  }
};

// Update a bazar entry
exports.updateBazar = async (req, res) => {
  const { id } = req.params;
  const { date, month, year, info, tk } = req.body;

  try {
    const updatedBazar = await DailyBazar.findByIdAndUpdate(
      id,
      { date, month, year, info, tk },
      { new: true }
    );
    if (!updatedBazar) return res.status(404).json({ error: 'Bazar entry not found' });
    res.status(200).json({ message: 'Bazar entry updated successfully', bazar: updatedBazar });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update bazar entry' });
  }
};

// Delete a bazar entry
exports.deleteBazar = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBazar = await DailyBazar.findByIdAndDelete(id);
    if (!deletedBazar) return res.status(404).json({ error: 'Bazar entry not found' });
    res.status(200).json({ message: 'Bazar entry deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete bazar entry' });
  }
};
