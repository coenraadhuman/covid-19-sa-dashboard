import { Injectable } from '@angular/core';
import {CountriesModel} from '../../models/locations.model';
import {GlobalStatsModel} from '../../models/global-stats.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  public rawData = [] as CountriesModel[];
  public globalStats = {} as GlobalStatsModel;
  public southAfrica = {} as CountriesModel;
  public locations = [] as CountriesModel[];
  public topTenLocations = [] as CountriesModel[];

  public isDataAssigned = false;
  public wasRecoveryIssueShown = false;
  public isTableLoaded = false;

  public updateInterval = 15;

  constructor() { }
}
