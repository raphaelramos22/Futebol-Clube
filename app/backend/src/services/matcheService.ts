import Team from '../database/models/Team';
import Matche from '../database/models/Matche';
import matches from '../interfaces/IMatche';

export default class Matches{
  static async getAll(): Promise<Matches[]> {
    const allMatches = await Matche.findAll({ include: [
      { model: Team, as: 'teamHome', attributes: ['teamName'] },
      { model: Team, as: 'teamAway', attributes: ['teamName'] },
    ] });
    return allMatches;
  }

  static async create (data: matches){
    const newMatche = await Matche.create({ ...data, inProgress: 1 });
    return newMatche;
  }
   static async update(id: number): Promise<void> {
    await Matche.update({ inProgress: false }, { where: { id } })
   }
}
