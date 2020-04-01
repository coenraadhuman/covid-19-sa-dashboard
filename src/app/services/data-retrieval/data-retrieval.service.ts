import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reports } from '../../models/locations.model';

@Injectable({
  providedIn: 'root'
})

export class DataRetrievalService {
  private newApi = 'https://covid19-server.chrismichael.now.sh/api/v1/AllReports';

  constructor(private http: HttpClient) { }

  private executeRequest<T>(uri: string): Observable<T> {
    return this.http.get<T>(uri, {responseType: 'json'});
  }

  public  getTotalsData(): Observable<Reports> {
    return this.executeRequest<Reports>(this.newApi);
  }
}
