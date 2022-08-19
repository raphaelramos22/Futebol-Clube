import Jwt from './JwtService';
import ILogin from '../interfaces/ILogin';


export default class Login{
  static async Login(login:ILogin) {
  const {email, password} = login
  if(!email || !password){
    const e = new Error();
    e.name = 'badRequest';
    e.message = 'All fields must be filled';
    throw e;
  }
     const token = await Jwt.createToken(login);
    return token;
  }
}

 