const mysql = require('mysql');
const util = require('util');

//require('dotenv').config();
const hostdb = process.env.HOSTDB;
const userdb = process.env.USERDB;
const passworddb = process.env.PASSWORDDB;
const database = process.env.DATABASE;

// The provided DB information is on a .env file
const db = mysql.createConnection({
    host: hostdb,
    user: userdb,
    password: passworddb,
    database: database,
});

db.query = util.promisify(db.query);

module.exports = db;