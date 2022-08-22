import Teams from '../database/models/Team';
import Matche from '../database/models/Matche';

export default class Matches{
  static async getAll(): Promise<Matches[]> {
    const allMatches = await Matche.findAll({ include: [
      { model: Teams, as: 'teamHome', attributes: ['teamName'] },
      { model: Teams, as: 'teamAway', attributes: ['teamName'] },
    ] });
    return allMatches;
  }
}
