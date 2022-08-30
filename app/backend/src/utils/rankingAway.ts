import Imatches from '../interfaces/IMatche';;
import { ITeamAway } from '../interfaces/ILeadeboard';

export default class rankingAway {
  static calculateGoalsAway = (match: Imatches[]): number[]=>{
    const goalsFavor = match
      .reduce((acc, curr: Imatches) => acc + curr.awayTeamGoals, 0);
      const goalsOwn = match
      .reduce((acc, curr: Imatches) => acc + curr.homeTeamGoals, 0);

    return [goalsFavor, goalsOwn];
  };

  static calculateAwayResults = (match: Imatches[]): number[] => {
    let wins = 0;
    let draws = 0;
    let losses = 0;

    match.forEach(({ homeTeamGoals, awayTeamGoals }) => {
      if (homeTeamGoals < awayTeamGoals) wins += 1;

      if (homeTeamGoals === awayTeamGoals) draws += 1;

      if (homeTeamGoals > awayTeamGoals) losses += 1;
    });

    const totalPoints = 3 * wins + draws;
    return [wins, draws, losses, totalPoints];
  };

  static calculateAway({ teamName, awayTeam }: ITeamAway) {
    
    const [
      wins, draws, losses, totalPoints ] = rankingAway.calculateAwayResults(awayTeam);

    const [goalsFavor, goalsOwn] = rankingAway.calculateGoalsAway(awayTeam);
    return {
      name: teamName,
      totalPoints,
      totalGames: awayTeam.length,
      totalVictories: wins,
      totalDraws: draws,
      totalLosses: losses,
      goalsFavor: goalsFavor,
      goalsOwn: goalsOwn,
      goalsBalance: (goalsFavor - goalsOwn),
      efficiency: Number(((totalPoints / (awayTeam.length * 3)) * 100).toFixed(2)),
    };
  };

}