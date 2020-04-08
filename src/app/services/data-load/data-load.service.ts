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
    if (!this.dataStore.isOverviewLoaded) {
      this.dataAssignment.getTotalsData();
    }

    if (!this.dataStore.isCaseDetailsLoaded) {
      this.dataAssignment.getSouthAfricaCaseDetailsData();
    }

    if (!this.dataStore.isTableLoaded) {
      this.dataAssignment.getTablesData();
    }

    if (this.dataStore.southAfricaDeathDetails.length === 0) {
      this.dataAssignment.getSouthAfricaDeathsDetailsData();
    }

    if (this.dataStore.southAfricaProvinceDetails.length === 0) {
      this.dataAssignment.getSouthAfricaProvinceDetailsData();
    }

    if (!this.dataStore.isGlobalTimelineDataRetrieved) {
      this.dataAssignment.getTimelineData();
    }

    if (this.dataStore.timelineDataCopy.length === 0) {
      this.dataAssignment.getTimelineData();
    }

    if (!this.dataStore.isTestDataLoaded) {
      this.dataAssignment.getSouthAfricaTestData();
    }
  }
}
