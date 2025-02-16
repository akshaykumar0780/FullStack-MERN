const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access denied"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ message: "Invalid Token" });
    }
}
module.exports = authMiddleware