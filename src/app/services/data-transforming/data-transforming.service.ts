import { Injectable } from '@angular/core';
import { LocationDetails } from '../../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class DataTransformingService {

  constructor() { }

  retrieveSouthAfricaFromLocations(locations: LocationDetails[]): LocationDetails {
    let southAfrica = {} as LocationDetails;

    locations.forEach(x => {
      if (x.Country === 'South Africa') {
        southAfrica = {...x};
      }
    });

    return southAfrica;
  }
}
