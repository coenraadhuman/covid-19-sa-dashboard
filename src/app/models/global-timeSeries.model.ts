export interface GlobalTimeSeriesModel {
    country: string;
    province: null | string;
    timeline: Timeline;
}

export interface Timeline {
    cases: { [key: string]: number };
    deaths: { [key: string]: number };
    recovered: { [key: string]: number };
}
