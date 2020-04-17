import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataRetrievalService } from '../data-retrieval/data-retrieval.service';
import { DataTransformingService } from '../data-transforming/data-transforming.service';
import { Store } from '@ngrx/store';
import {
  AppState,
  GLOBAL_TIME_SERIES,
  SOUTH_AFRICA_PROVINCE,
} from '../../store/app.reducer';
import { AssignGlobalStats } from '../../store/global-stats/global-stats.actions';
import { AssignSouthAfricaCountriesModel } from '../../store/south-africa-case/south-africa-case.actions';
import { AssignSouthAfricaTestDataModel } from '../../store/south-africa-test/south-africa-test.actions';
import { AssignGlobalTimeSeriesModel } from '../../store/global-time-series/global-time-series.actions';
import {
  AssignSouthAfricaDeathModel,
  AssignSouthAfricaProvinceModel,
} from '../../store/south-africa-province/south-africa-province.actions';
import { SouthAfricaProvinceTableModel } from '../../store/south-africa-province/south-africa-province.reducer';

@Injectable({
  providedIn: 'root',
})
export class DataAssignmentService {
  private subscriptionSix: Subscription;
  private subscriptionSeven: Subscription;

  constructor(
    private dataRetrieval: DataRetrievalService,
    private dataTransforming: DataTransformingService,
    private store: Store<AppState>
  ) {}

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
