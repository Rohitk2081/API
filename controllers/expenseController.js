const Expense = require('../models/Expense');

// Create a new expense
exports.addExpense = async (req, res) => {
    const { title, amount, date, description } = req.body;

    try {
        const expense = await Expense.create({
            user: req.user.id,
            title,
            amount,
            date,
            description
        });

        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all expenses for the logged-in user
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.id });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an existing expense
// exports.updateExpense = async (req, res) => {
//     const { id } = req.params;

//     try {
//         let expense = await Expense.findById(id);

//         if (!expense) {
//             return res.status(404).json({ message: 'Expense not found' });
//         }

//         // Check if the user is the owner of the expense
//         if (expense.user.toString() !== req.user.id) {
//             return res.status(401).json({ message: 'Not authorized' });
//         }

//         expense = await Expense.findByIdAndUpdate(id, req.body, { new: true });
//         res.status(200).json(expense);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
exports.updateExpense = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the expense by ID
        let expense = await Expense.findById(id);

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        // Check if the authenticated user is the owner of the expense
        if (expense.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        // Ensure only allowable fields are updated
        const updateData = {
            title: req.body.title,
            amount: req.body.amount,
            date: req.body.date,
            description: req.body.description
        };

        // Update the expense and return the updated document
        expense = await Expense.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Delete an expense
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        const expense = await Expense.findById(id);

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        // Check if the user is the owner of the expense
        if (expense.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await expense.remove();
        res.status(200).json({ message: 'Expense removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
