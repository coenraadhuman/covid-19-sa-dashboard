export interface GlobalTimeSeriesModel {
  country: string;
  province: null | string;
  timeline: Timelines;
}

export interface Timelines {
  cases: Timeline;
  deaths: Timeline;
  recovered: Timeline;
}

export interface Timeline {
  [key: string]: number;
}
