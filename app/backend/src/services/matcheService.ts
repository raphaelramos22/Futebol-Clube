import Team from '../database/models/Team';
import Matche from '../database/models/Matche';
import IMatches from '../interfaces/IMatche';
import IGoals from '../interfaces/IGoals';

export default class Matches{
  static async getAll(): Promise<Matches[]> {
    const allMatches = await Matche.findAll({ include: [
      { model: Team, as: 'teamHome', attributes: ['teamName'] },
      { model: Team, as: 'teamAway', attributes: ['teamName'] },
    ] });
    return allMatches;
  }

  static async create (data: IMatches):Promise<Matches>{
    if(data.awayTeam === data.homeTeam){
      const e = new Error();
      e.name = 'UnauthorizedError';
      e.message = 'It is not possible to create a match with two equal teams';
      throw e;
    }
    const homeTeam = await Team.findOne({ where: { id: data.homeTeam } });

    const awayTeam = await Team.findOne({ where: { id: data.awayTeam } });

    if (!homeTeam || !awayTeam){
      const e = new Error();
      e.name = 'NotFoundError';
      e.message = 'There is no team with such id!';
      throw e;
    }
    const newMatche = await Matche.create({ ...data, inProgress: true });
    return newMatche;
  }
  static async update(id: number): Promise<void> {
    await Matche.update({ inProgress: false }, { where: { id } })
  }
  static async UpadateGoals(id:number, data: IGoals ):Promise<void> {
    await Matche.update
  }   
}
