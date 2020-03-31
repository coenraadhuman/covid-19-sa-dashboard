import { Injectable } from '@angular/core';
import {LocationDetails, MultipleLocationsModel} from '../../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  public rawData = {} as MultipleLocationsModel;
  public southAfrica = {} as LocationDetails;
  public aggregatedLocations = [] as LocationDetails[];
  public topTenLocations = [] as LocationDetails[];

  public isDataAssigned = false;
  public wasRecoveryIssueShown = false;
  public isTableLoaded = false;

  public updateInterval = 15;

  constructor() { }
}
