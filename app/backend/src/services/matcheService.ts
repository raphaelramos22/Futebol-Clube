import Team from '../database/models/Team';
import Matche from '../database/models/Matche';
import IMatches from '../interfaces/IMatche';

export default class Matches{
  static async getAll(): Promise<Matches[]> {
    const allMatches = await Matche.findAll({ include: [
      { model: Team, as: 'teamHome', attributes: ['teamName'] },
      { model: Team, as: 'teamAway', attributes: ['teamName'] },
    ] });
    return allMatches;
  }

  static async create (data: IMatches){
    if(data.awayTeam === data.homeTeam){
      const e = new Error();
      e.name = 'UnauthorizedError';
      e.message = 'It is not possible to create a match with two equal teams';
      throw e;
    }

    const newMatche = await Matche.create({ ...data, inProgress: true });
    return newMatche;
  }
   static async update(id: number): Promise<void> {
    await Matche.update({ inProgress: false }, { where: { id } })
   }
}
