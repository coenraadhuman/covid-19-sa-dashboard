import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { DataRetrievalService } from '../../services/data-retrieval/data-retrieval.service';
import { of } from 'rxjs';
import {
  AssignSouthAfricaDeathModel,
  AssignSouthAfricaProvinceModel,
  REQUEST_SOUTH_AFRICA_DEATH_MODEL,
  REQUEST_SOUTH_AFRICA_PROVINCE_MODEL,
} from './south-africa-province.actions';

@Injectable()
export class SouthAfricaProvinceEffects {
  @Effect()
  getProvinceModel = this.actions$.pipe(
    ofType(REQUEST_SOUTH_AFRICA_PROVINCE_MODEL),
    switchMap(() => {
      return this.dataRetrieval.getSouthAfricaProvince().pipe(
        map((retrievedData) => {
          return new AssignSouthAfricaProvinceModel(retrievedData);
        }),
        catchError((errorRes) => {
          return of();
        })
      );
    })
  );

  @Effect()
  getDeathModel = this.actions$.pipe(
    ofType(REQUEST_SOUTH_AFRICA_DEATH_MODEL),
    switchMap(() => {
      return this.dataRetrieval.getSouthAfricaDeaths().pipe(
        map((retrievedData) => {
          return new AssignSouthAfricaDeathModel(retrievedData);
        }),
        catchError((errorRes) => {
          return of();
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private dataRetrieval: DataRetrievalService
  ) {}
}
