import * as jwt from 'jsonwebtoken';
import { JwtPayload, SignOptions } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import  ILogin  from '../interfaces/ILogin';


dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export default class Jwt {
  static createToken(login: ILogin): string {
   const { email } = login

  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ email } , JWT_SECRET, jwtConfig);
  return token;
  }
  
  static validateToken (token: string) {
    const data = jwt.verify(token, JWT_SECRET);
    return data as JwtPayload;
  };
};
