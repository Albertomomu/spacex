export interface TeamsStandingsInterface {
  meta:    Meta;
  results: Result[];
}

export interface Meta {
  description: string;
  fields:      Fields;
  title:       string;
}

export interface Fields {
  points:    string;
  position:  string;
  season:    string;
  team_id:   string;
  team_name: string;
}

export interface Result {
  points:    number;
  position:  number;
  season:    number;
  team_id:   number;
  team_name: string;
}