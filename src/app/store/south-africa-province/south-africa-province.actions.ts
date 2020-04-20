import { Action } from '@ngrx/store';
import { SouthAfricaProvinceModel } from '../../models/south-africa-province.model';
import { SouthAfricaDeathModel } from '../../models/south-africa-death.model';

export const ASSIGN_SOUTH_AFRICA_PROVINCE_MODEL =
  'assign_south_africa_province_model';
export const ASSIGN_SOUTH_AFRICA_DEATH_MODEL =
  'assign_south_africa_death_model';
export const REQUEST_SOUTH_AFRICA_PROVINCE_MODEL =
  'REQUEST_SOUTH_AFRICA_PROVINCE_MODEL';
export const REQUEST_SOUTH_AFRICA_DEATH_MODEL =
  'REQUEST_SOUTH_AFRICA_DEATH_MODEL';

export class AssignSouthAfricaProvinceModel implements Action {
  readonly type = ASSIGN_SOUTH_AFRICA_PROVINCE_MODEL;

  constructor(public payload: SouthAfricaProvinceModel[]) {}
}

export class AssignSouthAfricaDeathModel implements Action {
  readonly type = ASSIGN_SOUTH_AFRICA_DEATH_MODEL;

  constructor(public payload: SouthAfricaDeathModel[]) {}
}

export class RequestSouthAfricaProvinceModel implements Action {
  readonly type = REQUEST_SOUTH_AFRICA_PROVINCE_MODEL;
}

export class RequestSouthAfricaDeathModel implements Action {
  readonly type = REQUEST_SOUTH_AFRICA_DEATH_MODEL;
}

export type SouthAfricaProvinceActions =
  | AssignSouthAfricaProvinceModel
  | AssignSouthAfricaDeathModel;
