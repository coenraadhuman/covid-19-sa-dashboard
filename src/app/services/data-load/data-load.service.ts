import { Injectable } from '@angular/core';
import { DataStoreService } from '../data-store/data-store.service';
import { DataAssignmentService } from '../data-assignment/data-assignment.service';

@Injectable({
  providedIn: 'root',
})
export class DataLoadService {
  constructor(
    private dataStore: DataStoreService,
    private dataAssignment: DataAssignmentService
  ) {}

  public loadData() {
    this.dataAssignment.getTotalsData();
    this.dataAssignment.getSouthAfricaCaseDetailsData();
    this.dataAssignment.getTablesData();
    this.dataAssignment.getSouthAfricaTestData();
    this.dataAssignment.getSouthAfricaProvinceDetailsData();

    if (this.dataStore.southAfricaDeathDetails.length === 0) {
      this.dataAssignment.getSouthAfricaDeathsDetailsData();
    }

    // if (this.dataStore.southAfricaProvinceDetails.length === 0) {
    //   this.dataAssignment.getSouthAfricaProvinceDetailsData();
    // }

    if (this.dataStore.timelineDataCopy.length === 0) {
      this.dataAssignment.getTimelineData();
    }
  }
}
