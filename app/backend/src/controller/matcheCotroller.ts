import { Request, Response, NextFunction } from 'express';
import MatchesService from '../services/matcheService';

export default class MatchesController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try{
      const allMatches = await MatchesService.getAll();
      res.status(200).json(allMatches);
    } catch (err) {
      next(err);
    }
  }
}

