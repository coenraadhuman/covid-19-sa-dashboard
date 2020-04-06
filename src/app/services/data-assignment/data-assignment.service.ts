import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataRetrievalService } from '../data-retrieval/data-retrieval.service';
import { DataStoreService } from '../data-store/data-store.service';
import { DataTransformingService } from '../data-transforming/data-transforming.service';

@Injectable({
  providedIn: 'root'
})
export class DataAssignmentService {

  private subscriptionOne: Subscription;
  private subscriptionTwo: Subscription;
  private subscriptionThree: Subscription;
  private subscriptionFour: Subscription;

  constructor(private dataRetrieval: DataRetrievalService,
              public dataStore: DataStoreService,
              private dataTransforming: DataTransformingService) { }

  public getTablesData() {
    this.subscriptionOne = this.dataRetrieval.getLocationsData().subscribe(retrievedData => {
      this.dataStore.locations = [...retrievedData.sort((a, b) => b.cases - a.cases)];
      this.dataStore.southAfrica = this.dataTransforming.retrieveSouthAfricaFromLocations(retrievedData);
      this.dataStore.topTenLocations = [...this.dataStore.locations].splice(0, 10);
      this.dataStore.isTableLoaded = true;
      this.subscriptionOne.unsubscribe();
    });
  }

  public getTotalsData() {
    this.subscriptionTwo = this.dataRetrieval.getTotalsData().subscribe(retrievedData => {
      this.dataStore.globalStats = retrievedData;
      this.dataStore.isOverviewLoaded = true;
      this.subscriptionTwo.unsubscribe();
    });
  }

  public getSouthAfricaCaseDetailsData() {
    this.subscriptionThree = this.dataRetrieval.getSouthAfricaCases().subscribe(retrievedData => {
      this.dataStore.southAfricaRawCaseData = [...retrievedData];
      this.dataStore.southAfricaCaseDetails = this.dataTransforming.aggregateSouthAfricaCases(retrievedData);
      this.dataStore.isCaseDetailsLoaded = true;
      this.subscriptionThree.unsubscribe();
    });
  }

  public getTimelineData() {
    this.subscriptionFour = this.dataRetrieval.getGlobalTimeSeriesData().subscribe(retrievedData => {
      this.dataStore.timelineData = this.dataTransforming.getAggregatedTimelineData(retrievedData);
      this.subscriptionFour.unsubscribe();
    });
  }
}
