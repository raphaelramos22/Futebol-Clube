import Jwt from './JwtService';
import ILogin from '../interfaces/ILogin';
import User from '../database/models/User';


export default class Login{
  static async Login(login:ILogin) {
  const {email, password} = login
  
  if(!email || !password){
    const e = new Error();
    e.name = 'badRequest';
    e.message = 'All fields must be filled';
    throw e;
  }
  const user = await User.findOne({ where: { email: login.email } });
  if(!user){
    const e = new Error();
    e.name = 'UnauthorizedError';
    e.message = 'Incorrect email or password';
    throw e;
  }

     const token = Jwt.createToken(login);
    return token;
  }

}

 