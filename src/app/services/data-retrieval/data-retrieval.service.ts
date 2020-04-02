import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountriesModel } from '../../models/locations.model';
import { GlobalStatsModel } from '../../models/global-stats.model';

@Injectable({
  providedIn: 'root'
})

export class DataRetrievalService {
  private locationsApi = 'https://corona.lmao.ninja/countries';
  private totalsApi = 'https://corona.lmao.ninja/all';

  constructor(private http: HttpClient) { }

  private executeRequest<T>(uri: string): Observable<T> {
    return this.http.get<T>(uri, {responseType: 'json'});
  }

  public  getLocationsData(): Observable<CountriesModel[]> {
    return this.executeRequest<CountriesModel[]>(this.locationsApi);
  }
  public  getTotalsData(): Observable<GlobalStatsModel> {
    return this.executeRequest<GlobalStatsModel>(this.totalsApi);
  }
}
