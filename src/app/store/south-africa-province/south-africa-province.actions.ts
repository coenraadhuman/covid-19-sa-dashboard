import { Action } from '@ngrx/store';
import { SouthAfricaProvinceModel } from '../../models/south-africa-province.model';
import { SouthAfricaProvinceTableModel } from '../../models/south-africa-province-table.model';

export const ASSIGN_SOUTH_AFRICA_PROVINCE_MODEL =
  'assign_south_africa_province_model';

export class AssignSouthAfricaProvinceModel implements Action {
  readonly type = ASSIGN_SOUTH_AFRICA_PROVINCE_MODEL;

  constructor(
    public payload: {
      southAfricaProvinceDetails: SouthAfricaProvinceModel[];
      southAfricaProvinceTableDetails: SouthAfricaProvinceTableModel[];
    }
  ) {}
}
