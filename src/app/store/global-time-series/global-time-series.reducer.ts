import { GlobalTimeSeriesModel } from '../../models/global-timeSeries.model';
import {
  ASSIGN_GLOBAL_TIME_SERIES_MODEL,
  AssignGlobalTimeSeriesModel,
} from './global-time-series.actions';

export interface GlobalTimeSeriesReducer {
  globalTimelineData: GlobalTimeSeriesModel;
  timelineData: GlobalTimeSeriesModel[];
}

const initialState: GlobalTimeSeriesReducer = {
  globalTimelineData: {} as GlobalTimeSeriesModel,
  timelineData: [] as GlobalTimeSeriesModel[],
};

export function globalTimeSeriesReducer(
  state: GlobalTimeSeriesReducer = initialState,
  action: AssignGlobalTimeSeriesModel
): GlobalTimeSeriesReducer {
  switch (action.type) {
    case ASSIGN_GLOBAL_TIME_SERIES_MODEL:
      return {
        ...state,
        globalTimelineData: { ...action.payload.globalTimelineData },
        timelineData: { ...action.payload.timelineData },
      };
    default:
      return state;
  }
}
