import { Injectable } from '@angular/core';
import { CountriesModel } from '../../models/countries.model';
import { GlobalStatsModel } from '../../models/global-stats.model';
import { SouthAfricaCasesDetailsModel } from '../../models/south-africa-cases-details.model';
import { SouthAfricaCaseModel } from '../../models/south-africa-case.model';
import { GlobalTimeSeriesModel } from '../../models/global-timeSeries.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  public rawData = [] as CountriesModel[];
  public globalStats = {} as GlobalStatsModel;
  public southAfrica = {} as CountriesModel;
  public locations = [] as CountriesModel[];
  public topTenLocations = [] as CountriesModel[];

  public southAfricaRawCaseData = [] as SouthAfricaCaseModel[];
  public southAfricaCaseDetails = {} as SouthAfricaCasesDetailsModel;

  public timelineData = new Subject<GlobalTimeSeriesModel[]>();
  public timelineDataCopy = [] as GlobalTimeSeriesModel[];

  public wasRecoveryIssueShown = false;
  public isTableLoaded = false;
  public isOverviewLoaded = false;
  public isCaseDetailsLoaded = false;

  public showTopTen = true;

  public updateInterval = 15;

  public selectedLanguage: string;

  constructor() {}

  getTimelineData(): Observable<GlobalTimeSeriesModel[]> {
    return this.timelineData.asObservable();
  }
}
