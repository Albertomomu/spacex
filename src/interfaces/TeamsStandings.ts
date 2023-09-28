export interface TeamsStandingsInterface {
  title:           string;
  constructorStandings: constructorStanding[];
  httpStatusCode:  number;
}

export interface constructorStanding {
  pos:  number;
  team: string;
  pts:  number;
}