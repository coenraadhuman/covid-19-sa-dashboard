import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataRetrievalService } from '../data-retrieval/data-retrieval.service';
import { DataStoreService } from '../data-store/data-store.service';
import { DataTransformingService } from '../data-transforming/data-transforming.service';

@Injectable({
  providedIn: 'root',
})
export class DataAssignmentService {
  private subscriptionOne: Subscription;
  private subscriptionTwo: Subscription;
  private subscriptionThree: Subscription;
  private subscriptionFour: Subscription;
  private subscriptionFive: Subscription;
  private subscriptionSix: Subscription;
  private subscriptionSeven: Subscription;

  constructor(
    private dataRetrieval: DataRetrievalService,
    public dataStore: DataStoreService,
    private dataTransforming: DataTransformingService
  ) {}

  public getTablesData() {
    this.subscriptionOne = this.dataRetrieval
      .getLocationsData()
      .subscribe((retrievedData) => {
        this.dataStore.locations = [
          ...retrievedData.sort((a, b) => b.cases - a.cases),
        ];
        this.dataStore.southAfrica = this.dataTransforming.retrieveSouthAfricaFromLocations(
          retrievedData
        );
        this.dataStore.topTenLocations = [...this.dataStore.locations].splice(
          0,
          10
        );
        this.dataStore.locationsTotals = this.dataTransforming.getTotalTableObject(
          this.dataStore.locations
        );
        this.dataStore.topTenLocationsTotals = this.dataTransforming.getTotalTableObject(
          this.dataStore.topTenLocations
        );
        this.dataStore.isTableLoaded = true;
        this.subscriptionOne.unsubscribe();
      });
  }

  public getTotalsData() {
    this.subscriptionTwo = this.dataRetrieval
      .getTotalsData()
      .subscribe((retrievedData) => {
        this.dataStore.globalStats = retrievedData;
        this.dataStore.isOverviewLoaded = true;
        this.subscriptionTwo.unsubscribe();
      });
  }

  public getSouthAfricaCaseDetailsData() {
    this.subscriptionThree = this.dataRetrieval
      .getSouthAfricaCases()
      .subscribe((retrievedData) => {
        this.dataStore.southAfricaRawCaseData = [...retrievedData];
        this.dataStore.southAfricaCaseDetails = this.dataTransforming.aggregateSouthAfricaCases(
          retrievedData
        );
        this.dataStore.isCaseDetailsLoaded = true;
        this.subscriptionThree.unsubscribe();
      });
  }

  public getTimelineData() {
    this.subscriptionFour = this.dataRetrieval
      .getGlobalTimeSeriesData()
      .subscribe((retrievedData) => {
        this.dataStore.timelineDataCopy = this.dataTransforming.getAggregatedTimelineData(
          retrievedData
        );
        this.dataStore.timelineData.next(
          this.dataTransforming.getAggregatedTimelineData(retrievedData)
        );

        const object = this.dataTransforming.getGlobalAggregatedData(
          this.dataStore.timelineDataCopy
        );
        this.dataStore.globalTimelineData.next(object);
        this.dataStore.globalTimelineDataCopy = object;

        this.subscriptionFour.unsubscribe();
      });
  }

  public getSouthAfricaDeathsDetailsData() {
    this.subscriptionSix = this.dataRetrieval
      .getSouthAfricaDeaths()
      .subscribe((retrievedData) => {
        this.dataStore.southAfricaDeathDetails = retrievedData;
        retrievedData.forEach((x) => {
          this.dataStore.southAfricaProvinceTableDetails.forEach((y) => {
            if (x.province === y.key) {
              y.totalDeaths += 1;
            }
          });
        });
        this.dataStore.isDeathDetailsLoaded = true;
        this.subscriptionSix.unsubscribe();
      });
  }

  public getSouthAfricaProvinceDetailsData() {
    this.subscriptionSeven = this.dataRetrieval
      .getSouthAfricaProvince()
      .subscribe((retrievedData) => {
        this.dataStore.southAfricaProvinceDetails = retrievedData;
        // tslint:disable-next-line:max-line-length
        this.dataStore.southAfricaProvinceTableDetails[0].totalCases = Number(
          retrievedData[retrievedData.length - 2].provinces.gauteng
        );
        // tslint:disable-next-line:max-line-length
        this.dataStore.southAfricaProvinceTableDetails[1].totalCases = Number(
          retrievedData[retrievedData.length - 2].provinces.western_cape
        );
        // tslint:disable-next-line:max-line-length
        this.dataStore.southAfricaProvinceTableDetails[2].totalCases = Number(
          retrievedData[retrievedData.length - 2].provinces.kwazulu_natal
        );
        // tslint:disable-next-line:max-line-length
        this.dataStore.southAfricaProvinceTableDetails[3].totalCases = Number(
          retrievedData[retrievedData.length - 2].provinces.free_state
        );
        // tslint:disable-next-line:max-line-length
        this.dataStore.southAfricaProvinceTableDetails[4].totalCases = Number(
          retrievedData[retrievedData.length - 2].provinces.mpumlanga
        );
        // tslint:disable-next-line:max-line-length
        this.dataStore.southAfricaProvinceTableDetails[5].totalCases = Number(
          retrievedData[retrievedData.length - 2].provinces.north_west
        );
        // tslint:disable-next-line:max-line-length
        this.dataStore.southAfricaProvinceTableDetails[6].totalCases = Number(
          retrievedData[retrievedData.length - 2].provinces.limpopo
        );
        // tslint:disable-next-line:max-line-length
        this.dataStore.southAfricaProvinceTableDetails[7].totalCases = Number(
          retrievedData[retrievedData.length - 2].provinces.eastern_cape
        );
        // tslint:disable-next-line:max-line-length
        this.dataStore.southAfricaProvinceTableDetails[8].totalCases = Number(
          retrievedData[retrievedData.length - 2].provinces.northern_cape
        );
        this.dataStore.southAfricaProvinceTableDetails[9].totalCases = Number(
          retrievedData[retrievedData.length - 2].provinces.unknown
        );
        this.dataStore.isProvinceDetailsLoaded = true;
        this.subscriptionSeven.unsubscribe();
      });
  }

  public getSouthAfricaTestData() {
    this.dataRetrieval.getTestData().subscribe((retrievedData) => {
      this.dataStore.southAfricaTestData = this.dataTransforming.getMostRecentTestData(
        retrievedData
      );
      this.dataStore.isTestDataLoaded = true;
      this.subscriptionFive.unsubscribe();
    });
  }
}
