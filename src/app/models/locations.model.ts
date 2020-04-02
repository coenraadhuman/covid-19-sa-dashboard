export interface Reports {
    reports: Report[];
}

export interface Report {
    table: Table[];
}

export interface GlobalStats {
    cases: number;
    deaths: number;
    recovered: number;
    updated: number;
    active: number;
    affectedCountries: number;
}

export interface Table {
    country: string;
    countryInfo: CountryInfo;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number | null;
    deathsPerOneMillion: number | null;
    updated: number;
}

export interface CountryInfo {
    _id: number | null;
    iso2: null | string;
    iso3: null | string;
    lat: number;
    long: number;
    flag: string;
}
