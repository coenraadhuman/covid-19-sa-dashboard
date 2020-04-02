import { Injectable } from '@angular/core';
import { Table } from '../../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class DataTransformingService {

  constructor() { }

  addZeroCounts(locations: Table[])  {
    locations.forEach(x => {
      if (!x.deaths) {
        x.deaths = 0;
      }

      if (!x.recovered) {
        x.recovered = 0;
      }
    });
  }

  retrieveSouthAfricaFromLocations(locations: Table[]): Table {
    let southAfrica = {} as Table;

    locations.forEach(x => {
      if (x.country === 'South Africa') {
        southAfrica = {...x};
      }
    });

    return southAfrica;
  }
}
