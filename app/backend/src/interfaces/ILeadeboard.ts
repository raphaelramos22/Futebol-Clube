import matches from "./IMatche";

export interface ILeaderBoard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
}

export interface ITeamHome {
  id?: number,
  teamName: string,
  homeTeam: matches[],
}

export interface ITeamAway {
  id?: number,
  teamName: string,
  awayTeam: matches[],
}