import { Action } from '@ngrx/store';
import { SouthAfricaProvinceModel } from '../../models/south-africa-province.model';
import { SouthAfricaProvinceTableModel } from '../../models/south-africa-province-table.model';
import { SouthAfricaDeathModel } from '../../models/south-africa-death.model';

export const ASSIGN_SOUTH_AFRICA_PROVINCE_MODEL =
  'assign_south_africa_province_model';

export class AssignSouthAfricaProvinceModel implements Action {
  readonly type = ASSIGN_SOUTH_AFRICA_PROVINCE_MODEL;

  constructor(public payload: SouthAfricaProvinceModel[]) {}
}

export const ASSIGN_SOUTH_AFRICA_DEATH_MODEL =
  'assign_south_africa_death_model';

export class AssignSouthAfricaDeathModel implements Action {
  readonly type = ASSIGN_SOUTH_AFRICA_DEATH_MODEL;

  constructor(public payload: SouthAfricaDeathModel[]) {}
}

export type SouthAfricaProvinceActions =
  | AssignSouthAfricaProvinceModel
  | AssignSouthAfricaDeathModel;
