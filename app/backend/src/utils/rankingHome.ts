import Imatches from '../interfaces/IMatche';;
import { ITeamHome } from '../interfaces/ILeadeboard';

export default class rankingHome {
  static calculateGoalsHome = (match: Imatches[]): number[]=>{
    const goalsFavor = match
      .reduce((acc, curr: Imatches) => acc + curr.homeTeamGoals, 0);
      const goalsOwn = match
      .reduce((acc, curr: Imatches) => acc + curr.awayTeamGoals, 0);

    return [goalsFavor, goalsOwn];
  };

  static calculateHomeResults = (match: Imatches[]): number[] => {
    let wins = 0;
    let draws = 0;
    let losses = 0;

    match.forEach(({ homeTeamGoals, awayTeamGoals }) => {
      if (homeTeamGoals > awayTeamGoals) wins += 1;

      if (homeTeamGoals === awayTeamGoals) draws += 1;

      if (homeTeamGoals < awayTeamGoals) losses += 1;
    });

    const totalPoints = 3 * wins + draws;
    return [wins, draws, losses, totalPoints];
  };

  static calculateHome({ teamName, homeTeam }: ITeamHome) {
    
    const [
      wins, draws, losses, totalPoints ] = rankingHome.calculateHomeResults(homeTeam);

    const [goalsFavor, goalsOwn] = rankingHome.calculateGoalsHome(homeTeam);
    return {
      name: teamName,
      totalPoints,
      totalGames: homeTeam.length,
      totalVictories: wins,
      totalDraws: draws,
      totalLosses: losses,
      goalsFavor: goalsFavor,
      goalsOwn: goalsOwn,
      goalsBalance: (goalsFavor - goalsOwn),
      efficiency: Number(((totalPoints / (homeTeam.length * 3)) * 100).toFixed(2)),
    };
  };

}