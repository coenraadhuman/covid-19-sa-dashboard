import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataRetrievalService {
  locationsTimelineUri = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu&timelines=true';
  locationsUri = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu';
  southAfricaTimelineUri = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations/200?source=jhu&timelines=true';
  southAfricaUri = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations/200?source=jhu&timelines=false';

  constructor() { }
}
