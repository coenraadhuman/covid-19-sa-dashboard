import { Injectable } from '@angular/core';
import { DataStoreService } from '../data-store/data-store.service';
import { DataAssignmentService } from '../data-assignment/data-assignment.service';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { RequestCountries } from '../../store/countries/countries.actions';

@Injectable({
  providedIn: 'root',
})
export class DataLoadService {
  constructor(
    private dataStore: DataStoreService,
    private store: Store<AppState>,
    private dataAssignment: DataAssignmentService
  ) {}

  public loadData() {
    this.dataAssignment.getTotalsData();
    this.dataAssignment.getSouthAfricaCaseDetailsData();
    this.store.dispatch(new RequestCountries());
    this.dataAssignment.getSouthAfricaTestData();
    this.dataAssignment.getTimelineData();

    if (this.dataStore.southAfricaDeathDetails.length === 0) {
      this.dataAssignment.getSouthAfricaDeathsDetailsData();
    }

    // if (this.dataStore.southAfricaProvinceDetails.length === 0) {
    //   this.dataAssignment.getSouthAfricaProvinceDetailsData();
    // }
  }
}
