export interface SingleLocationModel {
    location: LocationDetails;
}

export interface MultipleLocationsModel {
    latest: LatestValues;
    locations: LocationDetails[];
}

export interface LatestValues {
    confirmed: number;
    deaths: number;
    recovered: number;
}

export interface LocationDetails {
    id: number;
    country: string;
    country_code: string;
    country_population: number | null;
    province: string;
    last_updated: Date;
    coordinates: LocationCoordinates;
    latest: LatestValues;
    timelines: LocationTimelines | null;
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
