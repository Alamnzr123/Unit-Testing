//deklare library

var jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./env');

module.exports = async (payload) => {
    const verifyOpts = {
        expiresIn: 60,
        // issuer: 'owner_auth'
    }
    const token = await jwt.sign(payload, JWT_SECRET, verifyOpts);
    return token;
}



// REFRESH TOKEN
// var jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('./env');

// const generateToken = (payload) => {
//     const verifyOpts = {
//         expiresIn: '1h',
//         // issuer: 'owner_auth'
//     }

//     const token = jwt.sign(payload, JWT_SECRET, verifyOpts)
//     return token;
// }

// const generateRefreshToken = (payload) => {
//     const verifyOpts = {
//         expiresIn: '1 day'
//     }

//     const token = jwt.sign(payload, JWT_SECRET, verifyOpts)
//     return token;
// }

// module.exports = { generateToken, generateRefreshToken }