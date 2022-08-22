import { Request, Response, NextFunction } from 'express';
import TeamService from '../services/teamService';

export default class Teams {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const allTeams = await TeamService.getAll();
      res.status(200).json(allTeams);
    } catch (err) {
      next(err);
    }
 }
}