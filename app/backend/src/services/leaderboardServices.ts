import Imatches from '../interfaces/IMatche';
import Matches from '../database/models/Matche';
import Team from '../database/models/Team';

export default class LeaderBoardService {
  static calculateGoalsHome(match: Imatches[]): number[]{
    const goalsFavor = match
      .reduce((acc, curr: Imatches) => acc + curr.homeTeamGoals, 0);
      const goalsOwn = match
      .reduce((acc, curr: Imatches) => acc + curr.awayTeamGoals, 0);

    return [goalsFavor, goalsOwn];
  };
  static calculateGoalsAway (match: Imatches[]): number[]{
    const goalsFavor = match
      .reduce((acc, curr: Imatches) => acc + curr.awayTeamGoals, 0);

    const goalsOwn = match
      .reduce((acc, curr: Imatches) => acc + curr.homeTeamGoals, 0);

    return [goalsFavor, goalsOwn];
  };
  static calculateHomeResults(match: Imatches[]): number[]{
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
  
}