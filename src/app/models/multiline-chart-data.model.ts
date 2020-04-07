export interface MultilineChartDataModel {
  name: string;
  series: MultilineChartTimelineSeriesData[];
}

export interface MultilineChartTimelineSeriesData {
  name: string;
  value: number;
}
