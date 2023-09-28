export interface DriversStandingsInterface {
  title:           string;
  driverStandings: DriverStanding[];
  httpStatusCode:  number;
}

export interface DriverStanding {
  pos:         number;
  driver:      Driver;
  nationality: string;
  car:         string;
  pts:         number;
}

export interface Driver {
  firstname: string;
  lastname:  string;
  abbr:      string;
}