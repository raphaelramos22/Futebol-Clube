import { Request, Response, NextFunction } from 'express';
import Jwt from '../services/JwtService';
import User from '../database/models/User';

const tokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    const e = new Error();
    e.name = 'UnauthorizedError';
    e.message = 'Token not found';
    throw e;
  }

   const { email } = Jwt.validateToken(token);
 
   const user = await User.findOne({ where: { email: email } })

   req.body.user = user?.role

  next();
};

export default tokenMiddleware;