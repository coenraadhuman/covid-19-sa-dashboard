import { Injectable } from '@angular/core';
import {LocationDetails, Totals} from '../../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  public rawData = {} as Totals;
  public southAfrica = {} as LocationDetails;
  public Locations = [] as LocationDetails[];
  public topTenLocations = [] as LocationDetails[];

  public isDataAssigned = false;
  public wasRecoveryIssueShown = false;
  public isTableLoaded = false;

  public updateInterval = 15;

  constructor() { }
}
