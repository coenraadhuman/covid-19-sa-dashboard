export interface Totals {
    cases: number;
    deaths: number;
    recovered: number;
    active_cases: ActiveCase[];
    closed_cases: ClosedCase[];
    locations: LocationDetails[];
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

export interface LocationDetails {
    TotalCases: string;
    NewCases: string;
    TotalDeaths: string;
    NewDeaths: string;
    TotalRecovered: string;
    ActiveCases: string;
    Deaths_1M_pop: string;
    FirstCase: string;
    Country: string;
    Serious_Critical: string;
    TotCases_1M_Pop: string;
}

export interface SingleLocationModel {
    location: LocationDetails;
}

export interface LocationCoordinates {
    latitude: string;
    longitude: string;
}

export interface LocationTimelines {
    confirmed: Timeline | null;
    deaths: Timeline | null;
    recovered: Timeline | null;
}

export interface Timeline {
    latest: number;
    timeline: { [key: string]: number };
}
