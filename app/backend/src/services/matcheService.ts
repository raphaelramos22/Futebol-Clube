import Teams from '../database/models/Team';
import matches from '../database/models/Matche';

export default class Matches{
  static async getAll(): Promise<Matches[]> {
    const allMatches = await matches.findAll({ include: [
      { model: Teams, as: 'teamHome', attributes: ['teamName'] },
      { model: Teams, as: 'teamAway', attributes: ['teamName'] },
    ] });
    return allMatches;
  }
}
