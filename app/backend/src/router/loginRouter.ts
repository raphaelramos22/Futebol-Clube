import { Router } from 'express';
import LoginController from '../controller/loginController'

const router = Router();


router.post('/login', LoginController.login);
router.get('/login/validate', LoginController.validate)

export default router;