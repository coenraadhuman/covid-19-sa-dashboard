import { Action } from '@ngrx/store';
import { TestDataModel } from '../../models/south-africa-test-data.model';

export const ASSIGN_SOUTH_AFRICA_TEST_DATA_MODEL =
  'assign_south_africa_test_data_model';
export const REQUEST_REQUEST_SOUTH_AFRICA_TESTS =
  'export const REQUEST_REQUEST_SOUTH_AFRICA_TESTS';

export class AssignSouthAfricaTestDataModel implements Action {
  readonly type = ASSIGN_SOUTH_AFRICA_TEST_DATA_MODEL;

  constructor(public payload: TestDataModel) {}
}

export class RequestSouthAfricaTests implements Action {
  readonly type = REQUEST_REQUEST_SOUTH_AFRICA_TESTS;
}
