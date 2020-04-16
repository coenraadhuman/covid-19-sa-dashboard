import { GlobalTimeSeriesModel } from '../../models/global-timeSeries.model';
import { Observable, Subject } from 'rxjs';
import {
  ASSIGN_GLOBAL_TIME_SERIES_MODEL,
  AssignGlobalTimeSeriesModel,
} from './global-time-series.actions';

export interface GlobalTimeSeriesReducer {
  globalTimelineDataCopy: GlobalTimeSeriesModel;
  globalTimelineData: Observable<GlobalTimeSeriesModel>;
}

const initialState: GlobalTimeSeriesReducer = {
  globalTimelineDataCopy: {} as GlobalTimeSeriesModel,
  globalTimelineData: {} as Subject<GlobalTimeSeriesModel>,
};

export function globalTimeSeriesReducer(
  state: GlobalTimeSeriesReducer = initialState,
  action: AssignGlobalTimeSeriesModel
): GlobalTimeSeriesReducer {
  switch (action.type) {
    case ASSIGN_GLOBAL_TIME_SERIES_MODEL:
      return {
        ...state,
        globalTimelineDataCopy: { ...action.payload.globalTimelineDataCopy },
        // globalTimelineData: { ...action.payload.globalTimelineData },
      };
    default:
      return state;
  }
}
