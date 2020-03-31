import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MultipleLocationsModel, SingleLocationModel } from '../../models/locations.model';

@Injectable({
  providedIn: 'root'
})

export class DataRetrievalService {
  locationsTimelineUri = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu&timelines=true';
  locationsUri = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu';
  southAfricaTimelineUri = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations/200?source=jhu&timelines=true';
  southAfricaUri = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations/200?source=jhu&timelines=false';

  constructor(private http: HttpClient) { }

  private executeRequest<T>(uri: string): Observable<T> {
    return this.http.get<T>(uri, {responseType: 'json'});
  }

  public getLocationsData(): Observable<MultipleLocationsModel> {
     return this.executeRequest<MultipleLocationsModel>(this.locationsUri);
  }

  public getLocationsTimelineData(): Observable<MultipleLocationsModel> {
     return this.executeRequest<MultipleLocationsModel>(this.locationsTimelineUri);
  }

  public getSouthAfricaData(): Observable<SingleLocationModel> {
     return this.executeRequest<SingleLocationModel>(this.southAfricaUri);
  }

  public getSouthAfricaTimelineData(): Observable<SingleLocationModel> {
     return this.executeRequest<SingleLocationModel>(this.southAfricaTimelineUri);
  }
}
