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
import {
  globalTimeSeriesReducer,
  GlobalTimeSeriesReducer,
} from './global-time-series/global-time-series.reducer';
import { ActionReducerMap } from '@ngrx/store';
import {
  southAfricaTestReducer,
  SouthAfricaTestReducer,
} from './south-africa-test/south-africa-test.reducer';

export const GLOBAL_STATS = 'globalStats';
export const SOUTH_AFRICA_CASE = 'southAfricaCase';
export const COUNTRIES = 'countries';
export const GLOBAL_TIME_SERIES = 'globalTimeSeries';
export const SOUTH_AFRICA_TEST_DATA = 'southAfricaTestData';

export interface AppState {
  globalStats: GlobalStatsReducer;
  southAfricaCase: SouthAfricaCaseReducer;
  countries: CountriesReducer;
  globalTimeSeries: GlobalTimeSeriesReducer;
  southAfricaTestData: SouthAfricaTestReducer;
}

export const appReducerMap: ActionReducerMap<AppState> = {
  globalStats: globalStatsReducer,
  southAfricaCase: southAfricaCaseReducer,
  countries: countriesReducer,
  globalTimeSeries: globalTimeSeriesReducer,
  southAfricaTestData: southAfricaTestReducer,
};
