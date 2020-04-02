import { Injectable } from '@angular/core';
import {GlobalStats, Report, Table} from '../../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  public rawData = {} as Report;
  public globalStats = {} as GlobalStats;
  public southAfrica = {} as Table;
  public locations = [] as Table[];
  public topTenLocations = [] as Table[];

  public isDataAssigned = false;
  public wasRecoveryIssueShown = false;
  public isTableLoaded = false;

  public updateInterval = 15;

  constructor() { }
}
