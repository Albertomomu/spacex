export interface DriversStandingsInterface {
  meta:    Meta;
  results: Result[];
}

export interface Meta {
  title:       string;
  description: string;
  fields:      Fields;
}

export interface Fields {
  position:    string;
  points:      string;
  driver_id:   string;
  driver_name: string;
  team_id:     string;
  team_name:   string;
  nationality: string;
  is_reserve:  string;
  updated:     string;
  season:      string;
}

export interface Result {
  position:    number;
  points:      string;
  driver_id:   number;
  driver_name: string;
  team_id:     number;
  team_name:   string;
  nationality: string;
  is_reserve:  number;
  updated:     Date;
  season:      number;
}
