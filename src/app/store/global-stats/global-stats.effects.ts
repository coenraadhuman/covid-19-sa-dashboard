import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { DataRetrievalService } from '../../services/data-retrieval/data-retrieval.service';
import { of } from 'rxjs';
import {
  AssignGlobalStats,
  REQUEST_GLOBAL_STATS,
} from './global-stats.actions';

@Injectable()
export class GlobalStatsEffects {
  @Effect()
  getGlobalStats = this.actions$.pipe(
    ofType(REQUEST_GLOBAL_STATS),
    switchMap(() => {
      return this.dataRetrieval.getTotalsData().pipe(
        map((retrievedData) => {
          return new AssignGlobalStats(retrievedData);
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
