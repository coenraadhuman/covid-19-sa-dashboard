import { Injectable } from '@angular/core';
import { DataStoreService } from '../data-store/data-store.service';
import { DataAssignmentService } from '../data-assignment/data-assignment.service';
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
import { ASSIGN_SOUTH_AFRICA_DEATH_MODEL } from '../../store/south-africa-province/south-africa-province.actions';

@Injectable({
  providedIn: 'root',
})
export class DataLoadService {
  constructor(
    private dataStore: DataStoreService,
    private store: Store<AppState>,
    private dataAssignment: DataAssignmentService
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
        this.dataAssignment.getSouthAfricaCaseDetailsData();
      }
    });
  }

  private checkAndLoadOverview() {
    this.store.select(GLOBAL_STATS).subscribe((x) => {
      if (!x.isOverviewLoaded) {
        this.dataAssignment.getTotalsData();
      }
    });
  }

  private checkAndLoadTestData() {
    this.store.select(SOUTH_AFRICA_TEST_DATA).subscribe((x) => {
      if (!x.isTestDataLoaded) {
        this.dataAssignment.getSouthAfricaTestData();
      }
    });
  }

  private checkAndLoadTimeline() {
    this.store.select(GLOBAL_TIME_SERIES).subscribe((x) => {
      if (!x.isLoaded) {
        this.dataAssignment.getTimelineData();
      }
    });
  }

  private checkAndLoadDeathDetails() {
    this.store.select(SOUTH_AFRICA_PROVINCE).subscribe((x) => {
      if (!x.isDeathDetailsLoaded) {
        this.dataAssignment.getSouthAfricaDeathsDetailsData();
      }
    });
  }

  private checkAndLoadProvinceTable() {
    this.store.select(SOUTH_AFRICA_PROVINCE).subscribe((x) => {
      if (!x.isProvinceDetailsLoaded) {
        this.dataAssignment.getSouthAfricaProvinceDetailsData();
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
