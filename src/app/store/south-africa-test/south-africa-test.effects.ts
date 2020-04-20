import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { DataRetrievalService } from '../../services/data-retrieval/data-retrieval.service';
import { of } from 'rxjs';
import {
  AssignSouthAfricaTestDataModel,
  REQUEST_REQUEST_SOUTH_AFRICA_TESTS,
} from './south-africa-test.actions';
import { DataTransformingService } from '../../services/data-transforming/data-transforming.service';

@Injectable()
export class SouthAfricaTestEffects {
  @Effect()
  getSouthAfricaTests = this.actions$.pipe(
    ofType(REQUEST_REQUEST_SOUTH_AFRICA_TESTS),
    switchMap(() => {
      return this.dataRetrieval.getTestData().pipe(
        map((retrievedData) => {
          return new AssignSouthAfricaTestDataModel(
            this.dataTransforming.getMostRecentTestData(retrievedData)
          );
        }),
        catchError((errorRes) => {
          return of();
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private dataRetrieval: DataRetrievalService,
    private dataTransforming: DataTransformingService
  ) {}
}
