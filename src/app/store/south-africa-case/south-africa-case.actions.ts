import { Action } from '@ngrx/store';
import { SouthAfricaCaseModel } from '../../models/south-africa-case.model';
import { SouthAfricaCasesDetailsModel } from '../../models/south-africa-cases-details.model';

export const ASSIGN_SOUTH_AFRICA_COUNTRY_MODEL =
  'ASSIGN_SOUTH_AFRICA_COUNTRY_MODEL';

export class AssignSouthAfricaCountriesModel implements Action {
  readonly type = ASSIGN_SOUTH_AFRICA_COUNTRY_MODEL;

  constructor(
    public payload: {
      southAfricaRawCaseData: SouthAfricaCaseModel[];
      southAfricaCaseDetails: SouthAfricaCasesDetailsModel;
    }
  ) {}
}
