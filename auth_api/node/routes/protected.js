import { protectFunction } from '../services/protected';

export const protect = (req, res, next) => {
  let tokentovalidate;
  let authorization = req.headers.authorization;
  if (authorization.startsWith("Bearer ")){
    tokentovalidate = authorization.substring(7, authorization.length);
    } else {
      //Error
    }
  //console.log(tokentovalidate);
  const autorizedmsg = protectFunction(tokentovalidate);
  if (autorizedmsg) {
    res.send({"data": autorizedmsg});
  } else {
    res.status(403).send({"data": "You are not allowed access"})
  }
  next();
}
