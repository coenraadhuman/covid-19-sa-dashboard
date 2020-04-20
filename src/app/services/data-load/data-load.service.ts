import { Injectable } from '@angular/core';
import { DataStoreService } from '../data-store/data-store.service';
import {
  AppState,
  COUNTRIES,
  GLOBAL_STATS,
  GLOBAL_TIME_SERIES,
  SOUTH_AFRICA_CASE,
  SOUTH_AFRICA_PROVINCE,
  SOUTH_AFRICA_TEST_DATA,
} from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { RequestCountries } from '../../store/countries/countries.actions';
import { RequestGlobalStats } from '../../store/global-stats/global-stats.actions';
import { RequestTimeSeries } from '../../store/global-time-series/global-time-series.actions';
import { RequestSouthAfricaCases } from '../../store/south-africa-case/south-africa-case.actions';
import { RequestSouthAfricaTests } from '../../store/south-africa-test/south-africa-test.actions';
import {
  RequestSouthAfricaDeathModel,
  RequestSouthAfricaProvinceModel,
} from '../../store/south-africa-province/south-africa-province.actions';

@Injectable({
  providedIn: 'root',
})
export class DataLoadService {
  constructor(
    private dataStore: DataStoreService,
    private store: Store<AppState>
  ) {}

  private checkAndLoadCountries() {
    this.store.select(COUNTRIES).subscribe((x) => {
      if (!x.isTableLoaded) {
        this.store.dispatch(new RequestCountries());
      }
    });
  }

  private checkAndLoadSouthAfricaCases() {
    this.store.select(SOUTH_AFRICA_CASE).subscribe((x) => {
      if (!x.isCaseDetailsLoaded) {
        this.store.dispatch(new RequestSouthAfricaCases());
      }
    });
  }

  private checkAndLoadOverview() {
    this.store.select(GLOBAL_STATS).subscribe((x) => {
      if (!x.isOverviewLoaded) {
        this.store.dispatch(new RequestGlobalStats());
      }
    });
  }

  private checkAndLoadTestData() {
    this.store.select(SOUTH_AFRICA_TEST_DATA).subscribe((x) => {
      if (!x.isTestDataLoaded) {
        this.store.dispatch(new RequestSouthAfricaTests());
      }
    });
  }

  private checkAndLoadTimeline() {
    this.store.select(GLOBAL_TIME_SERIES).subscribe((x) => {
      if (!x.isLoaded) {
        this.store.dispatch(new RequestTimeSeries());
      }
    });
  }

  private checkAndLoadDeathDetails() {
    this.store.select(SOUTH_AFRICA_PROVINCE).subscribe((x) => {
      if (!x.isDeathDetailsLoaded) {
        this.store.dispatch(new RequestSouthAfricaDeathModel());
      }
    });
  }

  private checkAndLoadProvinceTable() {
    this.store.select(SOUTH_AFRICA_PROVINCE).subscribe((x) => {
      if (!x.isProvinceDetailsLoaded) {
        this.store.dispatch(new RequestSouthAfricaProvinceModel());
      }
    });
  }

  public loadData() {
    this.checkAndLoadCountries();
    this.checkAndLoadSouthAfricaCases();
    this.checkAndLoadOverview();
    this.checkAndLoadTestData();
    this.checkAndLoadTimeline();
    this.checkAndLoadDeathDetails();
    this.checkAndLoadProvinceTable();
  }
}
