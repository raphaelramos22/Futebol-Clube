import { Request, Response } from 'express';
import loginService from '../services/loginService';

export default class Login {
  static async login(req: Request, res: Response) {
    const login = req.body;
    const token = await loginService.Login(login);
    return res.status(200).json({ token });
  }
}
