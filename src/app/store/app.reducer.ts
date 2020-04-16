import { ActionReducerMap } from '@ngrx/store';
import {
  GlobalStatsReducer,
  globalStatsReducer,
} from './global-stats/global-stats.reducer';
import {
  SouthAfricaCaseReducer,
  southAfricaCaseReducer,
} from './south-africa-case/south-africa-case.reducer';
import {
  CountriesReducer,
  countriesReducer,
} from './countries/countries.reducer';

export const GLOBAL_STATS = 'globalStats';
export const SOUTH_AFRICA_CASE = 'southAfricaCase';
export const COUNTRIES = 'countries';

export interface AppState {
  globalStats: GlobalStatsReducer;
  southAfricaCase: SouthAfricaCaseReducer;
  countries: CountriesReducer;
}

export const appReducerMap: ActionReducerMap<AppState> = {
  globalStats: globalStatsReducer,
  southAfricaCase: southAfricaCaseReducer,
  countries: countriesReducer,
};
