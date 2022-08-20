import { Router } from 'express';
import LoginController from '../controller/loginCotroller'

const router = Router();


router.post('/login', LoginController.login);
router.get('/login/validate', LoginController.validate)

export default router;