import { SouthAfricaProvinceModel } from '../../models/south-africa-province.model';
import {
  ASSIGN_SOUTH_AFRICA_DEATH_MODEL,
  ASSIGN_SOUTH_AFRICA_PROVINCE_MODEL,
  SouthAfricaProvinceActions,
} from './south-africa-province.actions';
import { SouthAfricaDeathModel } from '../../models/south-africa-death.model';

export interface SouthAfricaProvinceTableModel {
  key: string;
  alternativeName: string;
  name: string;
  totalCases: number;
  totalDeaths: number;
}

export interface SouthAfricaProvinceReducer {
  southAfricaProvinceDetails: SouthAfricaProvinceModel[];
  southAfricaDeathDetails: SouthAfricaDeathModel[];
  isDeathDetailsLoaded: boolean;
  isProvinceDetailsLoaded: boolean;
}

const initialState: SouthAfricaProvinceReducer = {
  southAfricaProvinceDetails: [] as SouthAfricaProvinceModel[],
  southAfricaDeathDetails: [] as SouthAfricaDeathModel[],
  isDeathDetailsLoaded: false,
  isProvinceDetailsLoaded: false,
};

export function southAfricaProvinceReducer(
  state: SouthAfricaProvinceReducer = initialState,
  action: SouthAfricaProvinceActions
): SouthAfricaProvinceReducer {
  switch (action.type) {
    case ASSIGN_SOUTH_AFRICA_PROVINCE_MODEL:
      return {
        ...state,
        isProvinceDetailsLoaded: true,
        southAfricaProvinceDetails: [...action.payload],
      };
    case ASSIGN_SOUTH_AFRICA_DEATH_MODEL:
      return {
        ...state,
        isDeathDetailsLoaded: true,
        southAfricaDeathDetails: [...action.payload],
      };
    default:
      return state;
  }
}
