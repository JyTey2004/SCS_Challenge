const jwt = require('jsonwebtoken');
const User = require('../modals/userModal.js');

// Create a new Account
async function createAccount(req, res) {
    // const { username, password, email, points } = req.body;
    const isNewAccount = await User.uniqueEmail(req.body.email);
    if (!isNewAccount) {
        return res.json({ 
            isSuccess: false,
            message: 'Email already exists' 
        });
    }
    if (req.body.password.length < 6) {
        return res.json({ 
            isSuccess: false,
            message: 'Password must be at least 6 characters' 
        });
    }
    if (req.body.username.length < 3) {
        return res.json({ 
            isSuccess: false,
            message: 'Username must be at least 3 characters' 
        });
    }
    if (req.body.username.length > 20) {
        return res.json({ 
            isSuccess: false,
            message: 'Username must be less than 20 characters' 
        });
    }
    try {
        const account = await User.create(req.body);
        const token = jwt.sign({ id: account._id }, process.env.JWT_KEY, { expiresIn: '30d' });
        res.status(200).json({
            isSuccess: true,
            account: account,
            token: token
        });
    } catch (error) {
        console.error('Failed to create account:', error);
        res.status(500).json({ error: 'Failed to create account' });
    }
}

// Get all Accounts
async function getAllAccounts(req, res) {
    try {
        const account = await User.find();
        res.status(200).json(account);
    } catch (err) {
        console.error('Failed to get account:', err);
        res.status(500).json({ message: err.message });
    }
}

// Get Account By Email
async function getAccountByEmail(req, res) {
    try {
        const account = await User.find({email: req.params.email});
        res.status(200).json(account);
    } catch (err) {
        console.error('Failed to get account:', err);
        res.status(500).json({ message: err.message });
    }
}


// Get a single Account
async function getAccountById(req, res) {
    try {
        res.status(200).json({
            isSuccess: true,
            account: req.account
        });
    } catch (err) {
        console.error('Failed to get account:', err);
        res.status(500).json({ message: err.message });
    }
}

// Update a Account
async function updateAccountById(req, res) {
    const { id } = req.params;
    try {
        const account = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (!account) {
            return res.status(404).json({ message: 'Account not found!' });
        }
        res.status(200).json(account);
    } catch (err) {
        console.error('Failed to update account:', err);
        res.status(400).json({ message: err.message });
    }
}

// Delete a Account
async function deleteAccount(req, res) {
    const { id } = req.params;
    try {
        const result = await User.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Account not found!' });
        }
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to delete account:', err);
        res.status(400).json({ message: err.message });
    }
}

// Login
async function login(req, res) {
    const { email, password } = req.body;
    const account = await User.findOne({email: email});
    if (!account) {
        return res.json({
            isSuccess: false,
             message: 'User not found!' 
        });
    }
    const isMatch = await account.comparePassword(password);
    if(!isMatch) {
        return res.json({
            isSuccess: false,
            message: 'Invalid password!'
        });
    }
    const token = jwt.sign({ id: account._id }, process.env.JWT_KEY, { expiresIn: '30d' });
    res.status(200).json({
        isSuccess: true,
        token: token,
        message: account
    });

}

module.exports = {
    createAccount,
    getAllAccounts,
    getAccountByEmail,
    getAccountById,
    updateAccountById,
    deleteAccount,
    login
}
