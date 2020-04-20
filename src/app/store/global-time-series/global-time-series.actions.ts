import { Action } from '@ngrx/store';
import { GlobalTimeSeriesModel } from '../../models/global-timeSeries.model';

export const ASSIGN_GLOBAL_TIME_SERIES_MODEL =
  'assign_global_time_series_model';
export const REQUEST_TIME_SERIES = 'REQUEST_TIME_SERIES';

export class AssignGlobalTimeSeriesModel implements Action {
  readonly type = ASSIGN_GLOBAL_TIME_SERIES_MODEL;

  constructor(
    public payload: {
      globalTimelineData: GlobalTimeSeriesModel;
      timelineData: GlobalTimeSeriesModel[];
    }
  ) {}
}

export class RequestTimeSeries implements Action {
  readonly type = REQUEST_TIME_SERIES;
}
