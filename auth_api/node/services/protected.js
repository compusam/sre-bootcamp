const jwt = require('jsonwebtoken');
require('dotenv').config();

export const protectFunction = (authorization) => {
 // console.log(`Autorization ${authorization} JWT ${process.env.JWT_SECRET}`);
  try {
   
    const user = jwt.verify(authorization, process.env.JWT_SECRET);
    if (user) {
      return "You are under protected data"
    }
    return null
  } catch (err) {
    console.error("Invalid JWT Token!");
    return null
  }
}
