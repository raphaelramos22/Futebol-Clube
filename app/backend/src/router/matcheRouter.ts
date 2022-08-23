import { Router } from 'express';
import MatchesController from '../controller/matcheController';

const router = Router();

router.get('/matches', MatchesController.getAll)



export default router;