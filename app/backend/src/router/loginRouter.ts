import { Router } from 'express';
import LoginController from '../controller/loginCotroller'

const router = Router();
console.log('cheguei');

router.post('/login', LoginController.login);

export default router;