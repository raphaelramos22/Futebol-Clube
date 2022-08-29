import { Router } from 'express';
import LeaderBoardController from '../controller/leaderboardController';

const router = Router();


router.get('/leaderboard/home', LeaderBoardController.getRankingHome)

export default router;