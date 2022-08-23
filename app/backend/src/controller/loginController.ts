import { NextFunction, Request, Response } from 'express';
import loginService from '../services/loginService';

export default class Login {
  static async login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
    const login = req.body;
    const token = await loginService.Login(login);
    return res.status(200).json({ token });
    }catch (err) {
      next(err);
    }
  }
  static async validate(req: Request, res: Response) {
    const role = req.body.user;
    res.status(200).json({ role });
  }
}
