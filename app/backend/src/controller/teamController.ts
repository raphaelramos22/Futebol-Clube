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
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const team = await TeamService.getById(Number(id));
      res.status(200).json(team);
    } catch (err) {
      next(err);
    }
  }
}