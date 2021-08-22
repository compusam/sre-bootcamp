require('custom-env').env();
const db = require('../config/db');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');


export const loginFunction = async (username, password) => {
try {
  const results = await db.query(
    "SELECT username, salt, role,password FROM users WHERE username = ?",
    [ username ]
  );
  const userobj = results[0];
  const hashedPassword = crypto.createHash('sha512').update(password + userobj.salt).digest('hex');
  if(!hashedPassword.localeCompare(userobj.password)){
    const tokenJWT = jwt.sign(
              {
                role: userobj.role,
              },
              process.env.JWT_SECRET,
              {
                noTimestamp: true,
              });
              //console.log(`JWT_SECRET: ${process.env.JWT_SECRET} Role: ${userobj.role} Token: ${tokenJWT}`);
              
              return tokenJWT;
  }
  return null
} catch (err) {
  console.error(err)
}
}
