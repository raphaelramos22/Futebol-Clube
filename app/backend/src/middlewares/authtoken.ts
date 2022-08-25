import { Request, Response, NextFunction } from 'express';
import Jwt from '../services/JwtService';
import User from '../database/models/User';

const tokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      const e = new Error();
      e.name = 'UnauthorizedError';
      e.message = 'Token must be a valid token';
      throw e;
    }

   const { email } = Jwt.validateToken(token);
 
   const user = await User.findOne({ where: { email: email } })

   req.body.user = user?.role

  next();
  } catch {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}


export default tokenMiddleware;