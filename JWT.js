const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // Replace with your actual secret key

// Function to generate a JWT token
function generateToken(payload) {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
}

// Function to verify a JWT token
function verifyToken(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        return null; // Invalid token
    }   


module.exports = {
    generateToken,
    verifyToken
};      


}