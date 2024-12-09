const express = require('express');
const { addMember, getAllMembers, deleteMember, updateMember } = require('../controllers/memberController');

const router = express.Router();

// Define routes and map to controller functions
router.post('/', addMember);            // POST /api/members
router.get('/', getAllMembers);         // GET /api/members
router.put('/:id', updateMember);      // PUT /api/members/:id
router.delete('/:id', deleteMember);   // DELETE /api/members/:id

module.exports = router;
