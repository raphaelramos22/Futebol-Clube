import { Router } from 'express';
import authToken from '../middlewares/authtoken';
import MatchesController from '../controller/matcheController';

const router = Router();

router.get('/matches', MatchesController.getAll)
router.post('/matches', authToken, MatchesController.create)
router.patch('/matches/:id/finish', authToken, MatchesController.update)
router.patch('/matches/:id', authToken, MatchesController.updateGols)

export default router;