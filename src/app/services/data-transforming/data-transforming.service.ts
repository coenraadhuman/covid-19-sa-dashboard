import { Injectable } from '@angular/core';
import { Table } from '../../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class DataTransformingService {

  constructor() { }

  retrieveSouthAfricaFromLocations(locations: Table[]): Table {
    let southAfrica = {} as Table;

    locations.forEach(x => {
      if (x.Country === 'South Africa') {
        southAfrica = {...x};
      }
    });

    return southAfrica;
  }
}
