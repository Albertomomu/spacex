export interface RaceResults {
  title:          string;
  raceResults:    RaceResult[];
  httpStatusCode: number;
}

export interface RaceResult {
  grandPrix: string;
  date:      Date;
  winner:    Winner;
  car:       string;
  laps:      number;
  time:      string;
}

export interface Winner {
  firstname: string;
  lastname:  string;
  abbr:      null;
}