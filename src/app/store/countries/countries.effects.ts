import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { AssignCountries, REQUEST_COUNTRIES } from './countries.actions';
import { DataRetrievalService } from '../../services/data-retrieval/data-retrieval.service';
import { DataTransformingService } from '../../services/data-transforming/data-transforming.service';
import { of } from 'rxjs';

@Injectable()
export class CountriesEffects {
  @Effect()
  getCountries = this.actions$.pipe(
    ofType(REQUEST_COUNTRIES),
    switchMap(() => {
      return this.dataRetrieval.getLocationsData().pipe(
        map((retrievedData) => {
          const retrievedLocations = [
            ...retrievedData.sort((a, b) => b.cases - a.cases),
          ];
          const retrieveSouthAfrica = this.dataTransforming.retrieveSouthAfricaFromLocations(
            retrievedData
          );
          const retrievedTopTenLocations = [...retrievedLocations].splice(
            0,
            10
          );
          const retrievedLocationsTotals = this.dataTransforming.getTotalTableObject(
            retrievedLocations
          );
          const retrievedTopTenLocationsTotals = this.dataTransforming.getTotalTableObject(
            retrievedTopTenLocations
          );

          return new AssignCountries({
            locations: retrievedLocations,
            southAfrica: retrieveSouthAfrica,
            topTenLocations: retrievedTopTenLocations,
            locationsTotals: retrievedLocationsTotals,
            topTenLocationsTotals: retrievedTopTenLocationsTotals,
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
