import { SouthAfricaProvinceModel } from '../../models/south-africa-province.model';

import {
  ASSIGN_SOUTH_AFRICA_PROVINCE_MODEL,
  AssignSouthAfricaProvinceModel,
} from './south-africa-province.actions';

export interface SouthAfricaProvinceReducer {
  southAfricaProvinceDetails: SouthAfricaProvinceModel[];
}

const initialState: SouthAfricaProvinceReducer = {
  southAfricaProvinceDetails: [] as SouthAfricaProvinceModel[],
};

export function southAfricaProvinceReducer(
  state: SouthAfricaProvinceReducer = initialState,
  action: AssignSouthAfricaProvinceModel
): SouthAfricaProvinceReducer {
  switch (action.type) {
    case ASSIGN_SOUTH_AFRICA_PROVINCE_MODEL:
      return {
        ...state,
        southAfricaProvinceDetails: {
          ...action.payload.southAfricaProvinceDetails,
        },
      };
    default:
      return state;
  }
}
