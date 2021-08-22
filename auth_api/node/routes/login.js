import { loginFunction } from '../services/login';

export const login = async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
 
  const tokenjwt = await loginFunction(username, password);
  //console.log(`Èste es el token de la funcion login: ${tokenjwt}`);
  let response = {
    "data": tokenjwt
  };
  res.send(response);
  next();
}
