import rankingAway from '../utils/rankingAway';
import Matches from '../database/models/Matche';
import Team from '../database/models/Team';
import { ILeaderBoard, ITeamAway, ITeamHome } from '../interfaces/ILeadeboard';
import rankingHome from '../utils/rankingHome';
import rankingGeneral from '../utils/ranking';

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
  static getRankingAway = async () => {
    const matches = await Team.findAll({
      include: [
        { model: Matches, as: 'awayTeam', where: { inProgress: false } },
      ],
    });

    const fineshedMatches = matches as unknown as ITeamAway[];
  

    const ranking =  fineshedMatches.map(rankingAway.calculateAway);

    return ranking.sort(this.orderRanking);
  }

  static async getRanking(): Promise<ILeaderBoard[]> {
    const matches = await Team.findAll({
      include: [
        { model: Matches, as: 'awayTeam', where: { inProgress: 0 } },
        { model: Matches, as: 'homeTeam', where: { inProgress: 0 } },
      ],
    });

    const ranking =  matches.map(rankingGeneral.calculateGeral);

    return ranking.sort(this.orderRanking);
  }
}