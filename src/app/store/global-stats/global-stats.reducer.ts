import { GlobalStatsModel } from '../../models/global-stats.model';
import { ASSIGN_GLOBAL_STATS, AssignGlobalStats } from './global-stats.actions';

export interface GlobalStatsReducer {
  globalStats: GlobalStatsModel;
  isOverviewLoaded: boolean;
}

const initialState: GlobalStatsReducer = {
  globalStats: {} as GlobalStatsModel,
  isOverviewLoaded: false,
};

export function globalStatsReducer(
  state: GlobalStatsReducer = initialState,
  action: AssignGlobalStats
): GlobalStatsReducer {
  switch (action.type) {
    case ASSIGN_GLOBAL_STATS:
      return {
        ...state,
        globalStats: { ...action.payload },
        isOverviewLoaded: true,
      };
    default:
      return state;
  }
}
