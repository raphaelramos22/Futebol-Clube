import { Router } from 'express';
import TeamsCotroller from '../controller/teamController';

const router = Router();

router.get('/teams', TeamsCotroller.getAll)
router.get('/teams/:id', TeamsCotroller.getById)

export default router;