import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataRetrievalService } from '../data-retrieval/data-retrieval.service';
import { DataStoreService } from '../data-store/data-store.service';
import { DataTransformingService } from '../data-transforming/data-transforming.service';
import { Store } from '@ngrx/store';
import { AppState, GLOBAL_TIME_SERIES } from '../../store/app.reducer';
import { AssignGlobalStats } from '../../store/global-stats/global-stats.actions';
import { AssignSouthAfricaCountriesModel } from '../../store/south-africa-case/south-africa-case.actions';
import { AssignSouthAfricaTestDataModel } from '../../store/south-africa-test/south-africa-test.actions';
import { AssignGlobalTimeSeriesModel } from '../../store/global-time-series/global-time-series.actions';
import {
  AssignSouthAfricaDeathModel,
  AssignSouthAfricaProvinceModel,
} from '../../store/south-africa-province/south-africa-province.actions';

@Injectable({
  providedIn: 'root',
})
export class DataAssignmentService {
  private subscriptionTwo: Subscription;
  private subscriptionThree: Subscription;
  private subscriptionFour: Subscription;
  private subscriptionFive: Subscription;
  private subscriptionSix: Subscription;
  private subscriptionSeven: Subscription;

  constructor(
    private dataRetrieval: DataRetrievalService,
    private dataTransforming: DataTransformingService,
    private store: Store<AppState>
  ) {}

  public getTotalsData() {
    this.subscriptionTwo = this.dataRetrieval
      .getTotalsData()
      .subscribe((retrievedData) => {
        this.store.dispatch(new AssignGlobalStats(retrievedData));
        this.subscriptionTwo.unsubscribe();
      });
  }

  public getSouthAfricaCaseDetailsData() {
    this.subscriptionThree = this.dataRetrieval
      .getSouthAfricaCases()
      .subscribe((retrievedData) => {
        this.store.dispatch(
          new AssignSouthAfricaCountriesModel({
            southAfricaRawCaseData: [...retrievedData],
            southAfricaCaseDetails: this.dataTransforming.aggregateSouthAfricaCases(
              retrievedData
            ),
          })
        );
        this.subscriptionThree.unsubscribe();
      });
  }

  public getTimelineData() {
    this.subscriptionFour = this.dataRetrieval
      .getGlobalTimeSeriesData()
      .subscribe((retrievedData) => {
        this.store.dispatch(
          new AssignGlobalTimeSeriesModel({
            timelineData: this.dataTransforming.getAggregatedTimelineData(
              retrievedData
            ),
            globalTimelineData: this.dataTransforming.getGlobalAggregatedData(
              retrievedData
            ),
          })
        );
        this.subscriptionFour.unsubscribe();
      });
  }

  public getSouthAfricaTestData() {
    this.subscriptionFive = this.dataRetrieval
      .getTestData()
      .subscribe((retrievedData) => {
        this.store.dispatch(
          new AssignSouthAfricaTestDataModel(
            this.dataTransforming.getMostRecentTestData(retrievedData)
          )
        );
        this.subscriptionFive.unsubscribe();
      });
  }

  public getSouthAfricaDeathsDetailsData() {
    this.subscriptionSix = this.dataRetrieval
      .getSouthAfricaDeaths()
      .subscribe((retrievedData) => {
        this.store.dispatch(new AssignSouthAfricaDeathModel(retrievedData));
        this.subscriptionSix.unsubscribe();
      });
  }

  public getSouthAfricaProvinceDetailsData() {
    this.subscriptionSeven = this.dataRetrieval
      .getSouthAfricaProvince()
      .subscribe((retrievedData) => {
        this.store.dispatch(new AssignSouthAfricaProvinceModel(retrievedData));
        this.subscriptionSeven.unsubscribe();
      });
  }
}
