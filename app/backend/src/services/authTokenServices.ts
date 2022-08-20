import Jwt from "./JwtService";
import User from '../database/models/User';

export default class AuthToken {
  static async validate(token: string | undefined) {
    if(!token){
      const e = new Error();
      e.name = 'UnauthorizedError';
      e.message = 'Token not found';
      throw e;
    }
    const { email } = Jwt.validateToken(token);
    const user = await User.findOne({ where: { email: email } });
    return user?.role
  }
}
