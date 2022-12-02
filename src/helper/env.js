//config env

require('dotenv').config();

module.exports = {
    DB_HOSTNAME: process.env.DB_HOSTNAME,
    DB_USERNAME : process.env.DB_USERNAME,
    DB_PASSWORD : process.env.DB_PASSWORD,
    PORT : process.env.PORT,
    DB_NAME: process.env.DB_NAME,
    JWT_SECRET : process.env.JWT_SECRET,
}