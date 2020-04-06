import { Injectable } from '@angular/core';
import { CountriesModel } from '../../models/countries.model';
import { GlobalStatsModel } from '../../models/global-stats.model';
import { SouthAfricaCasesDetailsModel } from '../../models/south-africa-cases-details.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  public rawData = [] as CountriesModel[];
  public globalStats = {} as GlobalStatsModel;
  public southAfrica = {} as CountriesModel;
  public locations = [] as CountriesModel[];
  public topTenLocations = [] as CountriesModel[];
  public southAfricaCaseDetails = {} as SouthAfricaCasesDetailsModel;

  public wasRecoveryIssueShown = false;
  public isTableLoaded = false;
  public isOverviewLoaded = false;
  public isCaseDetailsLoaded = false;

  public showTopTen = true;

  public updateInterval = 15;

  constructor() { }
}
