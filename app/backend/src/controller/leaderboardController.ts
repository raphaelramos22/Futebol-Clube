import { NextFunction, Request, Response } from 'express';
import LeaderboardServices from '../services/leaderboardService';

export default class LeaderboardController {
  static async getRankingHome(req: Request, res: Response, next: NextFunction) {
    try {
      const leaderboard = await LeaderboardServices.getRankingHome();
      res.status(200).json(leaderboard );
    } catch (err) {
      next(err);
    }
  }
  static async getRankingAway(req: Request, res: Response, next: NextFunction) {
    try {
      const leaderboard = await LeaderboardServices.getRankingAway();
      res.status(200).json(leaderboard );
    } catch (err) {
      next(err);
    }
  }
}
