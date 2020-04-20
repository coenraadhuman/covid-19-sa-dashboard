import {
  ASSIGN_SOUTH_AFRICA_TEST_DATA_MODEL,
  AssignSouthAfricaTestDataModel,
} from './south-africa-test.actions';
import { TestDataModel } from '../../models/south-africa-test-data.model';

export interface SouthAfricaTestReducer {
  southAfricaTestData: TestDataModel;
  isTestDataLoaded: boolean;
}

const initialState: SouthAfricaTestReducer = {
  southAfricaTestData: {} as TestDataModel,
  isTestDataLoaded: false,
};

export function southAfricaTestReducer(
  state: SouthAfricaTestReducer = initialState,
  action: AssignSouthAfricaTestDataModel
): SouthAfricaTestReducer {
  switch (action.type) {
    case ASSIGN_SOUTH_AFRICA_TEST_DATA_MODEL:
      return {
        ...state,
        isTestDataLoaded: true,
        southAfricaTestData: { ...action.payload },
      };
    default:
      return state;
  }
}
