export interface LocationModel {
    location: Location;
}

export interface Location {
    id: number;
    country: string;
    country_code: string;
    country_population: number;
    province: string;
    county: string;
    last_updated: Date;
    coordinates: Coordinates;
    latest: Latest;
    timelines: Timelines;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Latest {
    confirmed: number;
    deaths: number;
    recovered: number;
}

export interface Timelines {
    confirmed: Confirmed;
    deaths: Confirmed;
    recovered: Recovered;
}

export interface Confirmed {
    latest: number;
    timeline: { [key: string]: number };
}

export interface Recovered {
    latest: number;
    timeline: { [key: string]: number };
}
