import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SingleLocationModel, Totals} from '../../models/locations.model';

@Injectable({
  providedIn: 'root'
})

export class DataRetrievalService {

  private southAfricaTimelineUri = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations/200?source=jhu&timelines=true';
  private southAfricaUri = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations/200?source=jhu&timelines=false';
  private newApi = 'https://covid19-server.chrismichael.now.sh/api/v1/AllReports';
  constructor(private http: HttpClient) { }

  private executeRequest<T>(uri: string): Observable<T> {
    return this.http.get<T>(uri, {responseType: 'json'});
  }

  public  getTotalsData(): Observable<Totals> {
    return this.executeRequest<Totals>(this.newApi);
  }

  public getSouthAfricaData(): Observable<SingleLocationModel> {
     return this.executeRequest<SingleLocationModel>(this.southAfricaUri);
  }

  public getSouthAfricaTimelineData(): Observable<SingleLocationModel> {
     return this.executeRequest<SingleLocationModel>(this.southAfricaTimelineUri);
  }
}
