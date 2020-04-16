import { Action } from '@ngrx/store';
import { CountriesModel } from '../../models/countries.model';

export const ASSIGN_COUNTRIES = 'ASSIGN_COUNTRIES';

export class AssignCountries implements Action {
  readonly type = ASSIGN_COUNTRIES;

  constructor(
    public payload: {
      southAfrica: CountriesModel;
      locations: CountriesModel[];
      locationsTotals: CountriesModel;
      topTenLocations: CountriesModel[];
      topTenLocationsTotals: CountriesModel;
    }
  ) {}
}
