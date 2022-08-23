import { Router } from 'express';
import authtoken from '../middlewares/authtoken';
import LoginController from '../controller/loginController'

const router = Router();


router.post('/login', LoginController.login);
router.get('/login/validate', authtoken , LoginController.validate)

export default router;