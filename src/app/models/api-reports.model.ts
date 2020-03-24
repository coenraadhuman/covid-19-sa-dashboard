export interface ApiReportsModel {
  reports: Report[];
}

export interface Report {
  cases: number;
  deaths: number;
  recovered: number;
  active_cases: ActiveCase[];
  closed_cases: ClosedCase[];
  table: Array<Table[]>;
}

export interface ActiveCase {
  currently_infected_patients: number;
  inMidCondition: number;
  criticalStates: number;
}

export interface ClosedCase {
  cases_which_had_an_outcome: number;
  recovered: number;
  deaths: number;
}

export interface Table {
  TotalCases: string;
  NewCases: string;
  TotalDeaths: string;
  NewDeaths: string;
  TotalRecovered: string;
  ActiveCases: string;
  Country: string;
  Serious_Critical: string;
  TotCases_1M_Pop: string;
}
