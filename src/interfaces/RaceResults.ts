export interface RacesInterface {
  meta:    Meta;
  results: Result[];
}

export interface Meta {
  description: string;
  fields:      Fields;
  title:       string;
}

export interface Fields {
  country:       string;
  end_date:      string;
  name:          string;
  race_id:       string;
  season:        string;
  session_array: SessionArray;
  start_date:    string;
  status:        string;
  track:         string;
}

export interface SessionArray {
  date:         string;
  id:           string;
  session_name: string;
}

export interface Result {
  country:    string;
  end_date:   Date;
  name:       string;
  race_id:    number;
  season:     string;
  sessions:   Session[];
  start_date: Date;
  status:     Status;
  track:      string;
}

export interface Session {
  date:         Date;
  id:           number;
  session_name: SessionName;
}

export enum SessionName {
  FastestLap = "FastestLap",
  Grid = "Grid",
  Practice1 = "Practice 1",
  Practice2 = "Practice 2",
  Practice3 = "Practice 3",
  Qualifying1 = "Qualifying 1",
  Qualifying2 = "Qualifying 2",
  Qualifying3 = "Qualifying 3",
  Race = "Race",
}

export enum Status {
  Cancelled = "Cancelled",
  Confirmed = "Confirmed",
  Postponed = "Postponed",
}
