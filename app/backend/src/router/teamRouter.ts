import { Router } from 'express';
import TeamsCotroller from '../controller/teamController';

const router = Router();

router.get('/teams', TeamsCotroller.getAll)

export default router;