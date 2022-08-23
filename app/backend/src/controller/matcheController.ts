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
  static async create(req: Request, res: Response, next: NextFunction) {
    try{
      const newMatche = await MatchesService.create(req.body);
      res.status(201).json(newMatche);
    } catch (err) {
      next(err);
    }
  }
  static async update(req: Request, res: Response, next: NextFunction) {
    try{
      await MatchesService.update(Number(req.params.id));
      return res.status(200).json({ message: 'Finished' });
    } catch (err) {
      next(err);
    }
  }
}

