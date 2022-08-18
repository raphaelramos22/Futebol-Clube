import User from 'src/database/models/User';
import ILogin from '../interfaces/ILogin';



export default class LoginService implements Login {
  constructor(private model = User) {
    this.model = model;
  }
}