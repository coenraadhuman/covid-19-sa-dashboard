export interface LocationsModel {
    latest: Latest;
    locations: Location[];
}

export interface Latest {
    confirmed: number;
    deaths: number;
    recovered: number;
}

export interface Location {
    id: number;
    country: string;
    country_code: string;
    country_population: number | null;
    province: string;
    last_updated: Date;
    coordinates: Coordinates;
    latest: Latest;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}
