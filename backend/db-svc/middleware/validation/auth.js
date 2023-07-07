const jwt = require('jsonwebtoken');
const accountModel = require('../../modals/userModal.js');

exports.isAuth = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Access denied!'
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        account = await accountModel.findById(decoded.id);
        // console.log("Account:", account);
        if (!account) {
            return res.status(401).json({
                success: false,
                message: 'Access denied!'
            });
        }
        req.account = account;
        // console.log("Account:", req.account);
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Session expired!'
            });
        }
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: 'Unauthorised Access!'
            });
        }
        console.error('Failed to authenticate token:', err);
        res.status(500).json({ message: err.message });
    }
}