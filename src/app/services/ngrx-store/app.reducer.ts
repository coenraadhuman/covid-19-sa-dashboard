import * as AppActions from './app.actions';
import { AppStateModule } from './app-state.module';
import { GlobalStatsModel } from '../../models/global-stats.model';
import { CountriesModel } from '../../models/countries.model';

const initialState: AppStateModule = {
  globalStats: {} as GlobalStatsModel,
  southAfrica: {} as CountriesModel,
};

export function appReducer(
  state: AppStateModule = initialState,
  action: AppActions.AppActions
): AppStateModule {
  switch (action.type) {
    case AppActions.ASSIGN_GLOBAL_STATS:
      return {
        ...state,
        globalStats: action.payload,
      };
    default:
      return state; // To-do check default state returns
  }
}
