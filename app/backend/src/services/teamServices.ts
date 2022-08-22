import Team from "../database/models/Team";


export default class Teams{
  static async getAll(): Promise<Team[]> {
  const allTeams = await Team.findAll();
  return allTeams
  }
}
 