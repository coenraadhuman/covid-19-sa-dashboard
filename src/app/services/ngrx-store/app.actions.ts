import { Action } from '@ngrx/store';
import { GlobalStatsModel } from '../../models/global-stats.model';
import { CountriesModel } from '../../models/countries.model';

export type AppActions = AssignGlobalStats | AssignSouthAfricaCountriesModel;

export const ASSIGN_GLOBAL_STATS = 'ASSIGN_GLOBAL_STATS';
export const ASSIGN_SOUTH_AFRICA_COUNTRY_MODEL =
  'ASSIGN_SOUTH_AFRICA_COUNTRY_MODEL';

export class AssignGlobalStats implements Action {
  readonly type = ASSIGN_GLOBAL_STATS;

  constructor(public payload: GlobalStatsModel) {}
}

export class AssignSouthAfricaCountriesModel implements Action {
  readonly type = ASSIGN_SOUTH_AFRICA_COUNTRY_MODEL;

  constructor(public payload: CountriesModel) {}
}
