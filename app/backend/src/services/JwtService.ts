import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import  ILogin  from '../interfaces/ILogin';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export default class Jwt {
  static createToken(user: ILogin): string {
  const { email } = user;

  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);
  return token;
  }
};