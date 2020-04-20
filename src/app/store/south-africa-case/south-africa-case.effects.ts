import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { DataRetrievalService } from '../../services/data-retrieval/data-retrieval.service';
import { of } from 'rxjs';
import {
  AssignSouthAfricaCountriesModel,
  REQUEST_SOUTH_AFRICA_CASES,
} from './south-africa-case.actions';
import { DataTransformingService } from '../../services/data-transforming/data-transforming.service';

@Injectable()
export class SouthAfricaCaseEffects {
  @Effect()
  getSouthAfricaCases = this.actions$.pipe(
    ofType(REQUEST_SOUTH_AFRICA_CASES),
    switchMap(() => {
      return this.dataRetrieval.getSouthAfricaCases().pipe(
        map((retrievedData) => {
          return new AssignSouthAfricaCountriesModel({
            southAfricaRawCaseData: [...retrievedData],
            southAfricaCaseDetails: this.dataTransforming.aggregateSouthAfricaCases(
              retrievedData
            ),
          });
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
