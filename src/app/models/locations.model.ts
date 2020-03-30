export interface LocationsModel {
    latest: LatestLs;
    locations: LocationLs[];
}

export interface LatestLs {
    confirmed: number;
    deaths: number;
    recovered: number;
}

export interface LocationLs {
    id: number;
    country: string;
    country_code: string;
    country_population: number | null;
    province: string;
    last_updated: Date;
    coordinates: CoordinatesLs;
    latest: LatestLs;
}

export interface CoordinatesLs {
    latitude: string;
    longitude: string;
}
