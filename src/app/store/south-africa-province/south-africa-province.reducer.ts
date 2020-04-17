import { SouthAfricaProvinceModel } from '../../models/south-africa-province.model';

import {
  ASSIGN_SOUTH_AFRICA_DEATH_MODEL,
  ASSIGN_SOUTH_AFRICA_PROVINCE_MODEL,
  AssignSouthAfricaProvinceModel,
  SouthAfricaProvinceActions,
} from './south-africa-province.actions';
import { SouthAfricaProvinceTableModel } from '../../models/south-africa-province-table.model';
import { SouthAfricaDeathModel } from '../../models/south-africa-death.model';

export interface SouthAfricaProvinceReducer {
  southAfricaProvinceDetails: SouthAfricaProvinceModel[];
  southAfricaProvinceTableDetails: SouthAfricaProvinceTableModel[];
  southAfricaDeathDetails: SouthAfricaDeathModel[];
  isDeathDetailsLoaded: boolean;
  isProvinceDetailsLoaded: boolean;
}

const initialState: SouthAfricaProvinceReducer = {
  southAfricaProvinceDetails: [] as SouthAfricaProvinceModel[],
  southAfricaDeathDetails: [] as SouthAfricaDeathModel[],
  isDeathDetailsLoaded: false,
  isProvinceDetailsLoaded: false,
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
  action: SouthAfricaProvinceActions
): SouthAfricaProvinceReducer {
  switch (action.type) {
    case ASSIGN_SOUTH_AFRICA_PROVINCE_MODEL:
      const southAfricaProvinceData = [
        ...state.southAfricaProvinceTableDetails,
      ];
      const sortData = [...action.payload].sort(
        (a, b) =>
          (b.provinces.gauteng === '' ? 0 : Number(b.provinces.gauteng)) -
          (a.provinces.gauteng === '' ? 0 : Number(a.provinces.gauteng))
      );

      southAfricaProvinceData[0].totalCases = Number(
        sortData[0].provinces.gauteng
      );

      southAfricaProvinceData[1].totalCases = Number(
        sortData[0].provinces.western_cape
      );

      southAfricaProvinceData[2].totalCases = Number(
        sortData[0].provinces.kwazulu_natal
      );

      southAfricaProvinceData[3].totalCases = Number(
        sortData[0].provinces.free_state
      );

      southAfricaProvinceData[4].totalCases = Number(
        sortData[0].provinces.mpumlanga
      );

      southAfricaProvinceData[5].totalCases = Number(
        sortData[0].provinces.north_west
      );

      southAfricaProvinceData[6].totalCases = Number(
        sortData[0].provinces.limpopo
      );

      southAfricaProvinceData[7].totalCases = Number(
        sortData[0].provinces.eastern_cape
      );

      southAfricaProvinceData[8].totalCases = Number(
        sortData[0].provinces.northern_cape
      );
      southAfricaProvinceData[9].totalCases = Number(
        sortData[0].provinces.unknown
      );
      return {
        ...state,
        isProvinceDetailsLoaded: true,
        southAfricaProvinceTableDetails: southAfricaProvinceData,
        southAfricaProvinceDetails: sortData,
      };
    case ASSIGN_SOUTH_AFRICA_DEATH_MODEL:
      const southAfricaProvince = [...state.southAfricaProvinceTableDetails];
      action.payload.forEach((x) => {
        southAfricaProvince.forEach((y) => {
          if (x.province === y.key) {
            y.totalDeaths += 1;
          }
        });
      });
      return {
        ...state,
        isDeathDetailsLoaded: true,
        southAfricaProvinceTableDetails: southAfricaProvince,
        southAfricaDeathDetails: [...action.payload],
      };

    default:
      return state;
  }
}
