import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { DataRetrievalService } from '../../services/data-retrieval/data-retrieval.service';
import { of } from 'rxjs';
import {
  AssignGlobalTimeSeriesModel,
  REQUEST_TIME_SERIES,
} from './global-time-series.actions';
import { DataTransformingService } from '../../services/data-transforming/data-transforming.service';

@Injectable()
export class TimeSeriesEffects {
  @Effect()
  getTimeSeries = this.actions$.pipe(
    ofType(REQUEST_TIME_SERIES),
    switchMap(() => {
      return this.dataRetrieval.getGlobalTimeSeriesData().pipe(
        map((retrievedData) => {
          return new AssignGlobalTimeSeriesModel({
            timelineData: this.dataTransforming.getAggregatedTimelineData(
              retrievedData
            ),
            globalTimelineData: this.dataTransforming.getGlobalAggregatedData(
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
