import { Action } from '@ngrx/store';
import { GlobalTimeSeriesModel } from '../../models/global-timeSeries.model';
import { Subject } from 'rxjs';

export const ASSIGN_GLOBAL_TIME_SERIES_MODEL =
  'assign_global_time_series_model';

export class AssignGlobalTimeSeriesModel implements Action {
  readonly type = ASSIGN_GLOBAL_TIME_SERIES_MODEL;

  constructor(
    public payload: {
      globalTimelineDataCopy: GlobalTimeSeriesModel;
      globalTimelineData: Subject<GlobalTimeSeriesModel>;
    }
  ) {}
}
