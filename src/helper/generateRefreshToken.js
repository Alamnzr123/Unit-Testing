var jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./env');

module.exports = async (payload) => {
    const verifyOpts = {
        expiresIn: '1 day'
    }

    const token = jwt.sign(payload, JWT_SECRET, verifyOpts)
    return token;
}