import Jwt from './JwtService';
import ILogin from '../interfaces/ILogin';

export default class Login{
  static async Login(login:ILogin) {
     const token = await Jwt.createToken(login);
    return token;
  }
}

 