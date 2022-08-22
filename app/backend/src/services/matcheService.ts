import Team from '../database/models/Team';
import Matche from '../database/models/Matche';

export default class Matches{
  static async getAll(): Promise<Matches[]> {
    const allMatches = await Matche.findAll({ include: [
      { model: Team, as: 'teamHome', attributes: ['teamName'] },
      { model: Team, as: 'teamAway', attributes: ['teamName'] },
    ] });
    return allMatches;
  }
   static async update(id: number): Promise<void> {
    await Matche.update({ inProgress: false }, { where: { id } })
   }
}
