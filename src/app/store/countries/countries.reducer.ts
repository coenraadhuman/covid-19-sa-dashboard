import { CountriesModel } from '../../models/countries.model';
import { ASSIGN_COUNTRIES, AssignCountries } from './countries.actions';

export interface CountriesReducer {
  southAfrica: CountriesModel;
  locations: CountriesModel[];
  locationsTotals: CountriesModel;
  topTenLocations: CountriesModel[];
  topTenLocationsTotals: CountriesModel;
  isTableLoaded: boolean;
}

const initialState: CountriesReducer = {
  southAfrica: {} as CountriesModel,
  isTableLoaded: false,
  locations: [] as CountriesModel[],
  locationsTotals: {} as CountriesModel,
  topTenLocations: [] as CountriesModel[],
  topTenLocationsTotals: {} as CountriesModel,
};

export function countriesReducer(
  state: CountriesReducer = initialState,
  action: AssignCountries
): CountriesReducer {
  switch (action.type) {
    case ASSIGN_COUNTRIES:
      return {
        ...state,
        isTableLoaded: true,
        locations: [...action.payload.locations],
        locationsTotals: { ...action.payload.locationsTotals },
        southAfrica: { ...action.payload.southAfrica },
        topTenLocations: [...action.payload.topTenLocations],
        topTenLocationsTotals: { ...action.payload.topTenLocationsTotals },
      };
    default:
      return state;
  }
}
