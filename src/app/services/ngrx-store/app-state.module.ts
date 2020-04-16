import { GlobalStatsModel } from '../../models/global-stats.model';
import { CountriesModel } from '../../models/countries.model';

export const GLOBAL_STATS = 'globalStats';
export const SOUTH_AFRICA = 'southAfrica';

export interface AppStateModule {
  globalStats: GlobalStatsModel;
  southAfrica: CountriesModel;
}
