import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountriesModel } from '../../models/countries.model';
import { GlobalStatsModel } from '../../models/global-stats.model';
import { SouthAfricaCaseModel } from '../../models/south-africa-case.model';
import { GlobalTimeSeriesModel } from '../../models/global-timeSeries.model';

@Injectable({
  providedIn: 'root',
})
export class DataRetrievalService {
  private countriesUri = 'https://corona.lmao.ninja/countries';
  private overviewTotalsUri = 'https://corona.lmao.ninja/all';
  private southAfricaCasesUri =
    'https://covid-za-api.herokuapp.com/cases/confirmed';
  private globalTimeSeriesUri =
    'https://corona.lmao.ninja/v2/historical?lastdays=all';

  constructor(private http: HttpClient) {}

  private executeRequest<T>(uri: string): Observable<T> {
    return this.http.get<T>(uri, { responseType: 'json' });
  }

  public getLocationsData(): Observable<CountriesModel[]> {
    return this.executeRequest<CountriesModel[]>(this.countriesUri);
  }

  public getTotalsData(): Observable<GlobalStatsModel> {
    return this.executeRequest<GlobalStatsModel>(this.overviewTotalsUri);
  }

  public getSouthAfricaCases(): Observable<SouthAfricaCaseModel[]> {
    return this.executeRequest<SouthAfricaCaseModel[]>(
      this.southAfricaCasesUri
    );
  }

  public getGlobalTimeSeriesData(): Observable<GlobalTimeSeriesModel[]> {
    return this.executeRequest<GlobalTimeSeriesModel[]>(
      this.globalTimeSeriesUri
    );
  }
}
