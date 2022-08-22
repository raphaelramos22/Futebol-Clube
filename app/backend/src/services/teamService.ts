import Team from "../database/models/Team";


export default class Teams{
  static async getAll(): Promise<Team[]> {
  const allTeams = await Team.findAll();
  return allTeams
  }
  static async getById(id: number): Promise<Team | null > {
    const team = await Team.findOne({ where: { id } });
    return team;
  }
}
 