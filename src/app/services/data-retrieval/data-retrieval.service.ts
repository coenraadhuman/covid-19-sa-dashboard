import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {GlobalStats, Report, Reports, Table} from '../../models/locations.model';

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

  public  getLocationsData(): Observable<Report> {
    return this.executeRequest<Report>(this.locationsApi);
  }
  public  getTotalsData(): Observable<GlobalStats> {
    return this.executeRequest<GlobalStats>(this.totalsApi);
  }
}
