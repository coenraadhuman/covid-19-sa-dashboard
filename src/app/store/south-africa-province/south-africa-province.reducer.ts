import { SouthAfricaProvinceModel } from '../../models/south-africa-province.model';

import {
  ASSIGN_SOUTH_AFRICA_PROVINCE_MODEL,
  AssignSouthAfricaProvinceModel,
} from './south-africa-province.actions';
import { SouthAfricaProvinceTableModel } from '../../models/south-africa-province-table.model';

export interface SouthAfricaProvinceReducer {
  southAfricaProvinceDetails: SouthAfricaProvinceModel[];
  southAfricaProvinceTableDetails: SouthAfricaProvinceTableModel[];
}

const initialState: SouthAfricaProvinceReducer = {
  southAfricaProvinceDetails: [] as SouthAfricaProvinceModel[],
  southAfricaProvinceTableDetails: [
    {
      key: 'GP',
      alternativeName: 'gauteng',
      name: 'Gauteng',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'WC',
      alternativeName: 'western_cape',
      name: 'Western Cape',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'KZN',
      alternativeName: 'kwazulu_natal',
      name: 'KwaZulu-Natal',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'FS',
      alternativeName: 'free_state',
      name: 'Free State',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'MP',
      alternativeName: 'mpumlanga',
      name: 'Mpumalanga',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'NW',
      alternativeName: 'north_west',
      name: 'North West',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'LP',
      alternativeName: 'limpopo',
      name: 'Limpopo',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'EC',
      alternativeName: 'eastern_cape',
      name: 'Eastern Cape',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'NC',
      alternativeName: 'northern_cape',
      name: 'Northern Cape',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'UNK',
      alternativeName: 'unknown',
      name: 'Unknown',
      totalCases: 0,
      totalDeaths: 0,
    },
  ],
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
