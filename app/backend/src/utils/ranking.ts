import rankingAway from "./rankingAway"
import rankingHome from "./rankingHome"

export default class ranking {
  static calculateGeral(teamMatches:any){
    const away = rankingAway.calculateAway(teamMatches);
    const home = rankingHome.calculateHome(teamMatches);

    return {
      name: teamMatches.teamName,
      totalPoints: away.totalPoints + home.totalPoints,
      totalGames: away.totalGames + home.totalGames,
      totalVictories: away.totalVictories + home.totalVictories,
      totalDraws: away.totalDraws + home.totalDraws,
      totalLosses: away.totalLosses + home.totalLosses,
      goalsFavor: away.goalsFavor + home.goalsFavor,
      goalsOwn: away.goalsOwn + home.goalsOwn,
      goalsBalance: away.goalsBalance + home.goalsBalance,
      efficiency: Number((((away.totalPoints + home.totalPoints)/((away.totalGames + home.totalGames) * 3)) * 100).toFixed(2)),
    };
  }
    
}