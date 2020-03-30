export interface LocationModel {
    location: LocationL;
}

export interface LocationL {
    id: number;
    country: string;
    country_code: string;
    country_population: number;
    province: string;
    county: string;
    last_updated: Date;
    coordinates: CoordinatesL;
    latest: LatestL;
    timelines: TimelinesL;
}

export interface CoordinatesL {
    latitude: string;
    longitude: string;
}

export interface LatestL {
    confirmed: number;
    deaths: number;
    recovered: number;
}

export interface TimelinesL {
    confirmed: ConfirmedL;
    deaths: ConfirmedL;
    recovered: RecoveredL;
}

export interface ConfirmedL {
    latest: number;
    timeline: { [key: string]: number };
}

export interface RecoveredL {
    latest: number;
    timeline: { [key: string]: number };
}
