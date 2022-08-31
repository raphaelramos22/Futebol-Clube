import { Router } from 'express';
import LeaderBoardController from '../controller/leaderboardController';

const router = Router();


router.get('/leaderboard/home', LeaderBoardController.getRankingHome)
router.get('/leaderboard/away', LeaderBoardController.getRankingAway)
router.get('/leaderboard', LeaderBoardController.getRanking)

export default router;