import { Injectable } from '@angular/core';
import { CountriesModel } from '../../models/countries.model';
import { GlobalTimeSeriesModel } from '../../models/global-timeSeries.model';
import { Observable, Subject } from 'rxjs';
import { SouthAfricaDeathModel } from '../../models/south-africa-death.model';
import { SouthAfricaProvinceModel } from '../../models/south-africa-province.model';
import { SouthAfricaProvinceTableModel } from '../../models/south-africa-province-table.model';
import { TestDataModel } from '../../models/south-africa-test-data.model';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  public rawData = [] as CountriesModel[];

  public southAfricaDeathDetails = [] as SouthAfricaDeathModel[];
  public southAfricaProvinceDetails = [] as SouthAfricaProvinceModel[];

  // public southAfricaTestData = {} as TestDataModel;

  public southAfricaProvinceTableDetails: SouthAfricaProvinceTableModel[] = [
    {
      key: 'GP',
      alternativeName: 'gauteng',
      name: 'Gauteng',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'WC',
      alternativeName: 'western_cape',
      name: 'Western Cape',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'KZN',
      alternativeName: 'kwazulu_natal',
      name: 'KwaZulu-Natal',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'FS',
      alternativeName: 'free_state',
      name: 'Free State',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'MP',
      alternativeName: 'mpumlanga',
      name: 'Mpumalanga',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'NW',
      alternativeName: 'north_west',
      name: 'North West',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'LP',
      alternativeName: 'limpopo',
      name: 'Limpopo',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'EC',
      alternativeName: 'eastern_cape',
      name: 'Eastern Cape',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'NC',
      alternativeName: 'northern_cape',
      name: 'Northern Cape',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'UNK',
      alternativeName: 'unknown',
      name: 'Unknown',
      totalCases: 0,
      totalDeaths: 0,
    },
  ];

  public timelineData = new Subject<GlobalTimeSeriesModel[]>();
  public timelineDataCopy = [] as GlobalTimeSeriesModel[];

  public globalTimelineDataCopy = {} as GlobalTimeSeriesModel;
  public globalTimelineData = new Subject<GlobalTimeSeriesModel>();
  public isGlobalTimelineDataRetrieved = false;

  public wasRecoveryIssueShown = false;

  // public isOverviewLoaded = false;
  public isTestDataLoaded = false;

  public isCaseDetailsLoaded = false;
  public isDeathDetailsLoaded = false;
  public isProvinceDetailsLoaded = false;

  public showTopTen = true;

  public updateInterval = 15;

  public selectedLanguage: string;

  public timelineLegendCases = 'Total Cases';
  public timelineLegendDeaths = 'Total Deaths';
  public timelineLegendRecovered = 'Total Recovered';

  public isFeatureSnackbarShown = false;

  constructor() {}

  getTimelineData(): Observable<GlobalTimeSeriesModel[]> {
    return this.timelineData.asObservable();
  }

  getGlobalTimelineData(): Observable<GlobalTimeSeriesModel> {
    return this.globalTimelineData.asObservable();
  }
}
