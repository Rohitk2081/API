const express = require('express');
const { addExpense, getExpenses, updateExpense, deleteExpense } = require('../controllers/expenseController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// POST /api/expenses - Add a new expense
router.post('/', protect, addExpense);

// GET /api/expenses - Get all expenses for the logged-in user
router.get('/', protect, getExpenses);

// PUT /api/expenses/:id - Update an expense
router.put('/:id', protect, updateExpense);

// DELETE /api/expenses/:id - Delete an expense
router.delete('/:id', protect, deleteExpense);

module.exports = router;