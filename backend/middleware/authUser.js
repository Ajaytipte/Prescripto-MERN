import jwt from 'jsonwebtoken'

// user authentication middleware
const authUser = async (req, res, next) => {
    const { token } = req.headers
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized Login Again' })
    }
    try {
        // Add logging to debug JWT secret
        console.log('Attempting to verify token...');
        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET is not defined in environment variables');
            return res.status(500).json({ success: false, message: 'Server configuration error' });
        }
        
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log('Token verified successfully');
        req.body.userId = token_decode.id
        next()
    } catch (error) {
        console.error('JWT Verification Error:', error.name, error.message);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ success: false, message: 'Invalid token' });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token expired' });
        }
        res.status(401).json({ success: false, message: 'Authentication failed' })
    }
}

export default authUser;