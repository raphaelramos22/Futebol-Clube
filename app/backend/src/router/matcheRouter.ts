import { Router } from 'express';
import Login from '../controller/loginController';
import authToken from '../middlewares/authtoken';
import MatchesController from '../controller/matcheController';

const router = Router();

router.get('/matches', MatchesController.getAll)



export default router;