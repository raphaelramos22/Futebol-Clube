import Matches from '../database/models/Matche';
import Team from '../database/models/Team';
import { ILeaderBoard, ITeamHome } from '../interfaces/ILeadeboard';
import rankingHome from '../utils/rankingHome';

export default class LeaderBoardService {
  static orderRanking = (a: ILeaderBoard, b: ILeaderBoard) => {
    if (a.totalPoints < b.totalPoints) { return 1; }
    if (a.totalPoints > b.totalPoints) { return -1; }
    if (a.totalVictories < b.totalVictories) { return 1; }
    if (a.totalVictories > b.totalVictories) { return -1; }
    if (a.goalsBalance < b.goalsBalance) { return 1; }
    if (a.goalsBalance > b.goalsBalance) { return -1; }
    if (a.goalsFavor < b.goalsFavor) { return 1; }
    if (a.goalsFavor > b.goalsFavor) { return -1; }
    if (a.goalsOwn < b.goalsOwn) { return 1; }
    if (a.goalsOwn > b.goalsOwn) { return -1; }
    return 0;
  };
   
  static getRankingHome = async () => {
      const matches = await Team.findAll({
        include: [
          { model: Matches, as: 'homeTeam', where: { inProgress: false } },
        ],
      });
  
    const fineshedMatches = matches as unknown as ITeamHome[];
    
  
    const ranking =  fineshedMatches.map(rankingHome.calculateHome);

    return ranking.sort(this.orderRanking);
  }
}