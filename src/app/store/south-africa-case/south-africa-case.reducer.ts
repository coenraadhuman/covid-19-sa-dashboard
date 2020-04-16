import {
  ASSIGN_SOUTH_AFRICA_COUNTRY_MODEL,
  AssignSouthAfricaCountriesModel,
} from './south-africa-case.actions';
import { SouthAfricaCaseModel } from '../../models/south-africa-case.model';
import { SouthAfricaCasesDetailsModel } from '../../models/south-africa-cases-details.model';

export interface SouthAfricaCaseReducer {
  southAfricaRawCaseData: SouthAfricaCaseModel[];
  southAfricaCaseDetails: SouthAfricaCasesDetailsModel;
  isCaseDetailsLoaded: boolean;
}

const initialState: SouthAfricaCaseReducer = {
  southAfricaCaseDetails: {} as SouthAfricaCasesDetailsModel,
  southAfricaRawCaseData: [] as SouthAfricaCaseModel[],
  isCaseDetailsLoaded: false,
};

export function southAfricaCaseReducer(
  state: SouthAfricaCaseReducer = initialState,
  action: AssignSouthAfricaCountriesModel
): SouthAfricaCaseReducer {
  switch (action.type) {
    case ASSIGN_SOUTH_AFRICA_COUNTRY_MODEL:
      return {
        ...state,
        southAfricaRawCaseData: { ...action.payload.southAfricaRawCaseData },
        southAfricaCaseDetails: { ...action.payload.southAfricaCaseDetails },
        isCaseDetailsLoaded: true,
      };
    default:
      return state;
  }
}
