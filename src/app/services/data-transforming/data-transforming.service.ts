import { Injectable } from '@angular/core';
import { Table } from '../../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class DataTransformingService {

  constructor() { }

  addZeroCounts(locations: Table[])  {
    locations.forEach(x => {
      if (!x.TotalDeaths) {
        x.TotalDeaths = '0';
      }

      if (!x.TotalRecovered) {
        x.TotalRecovered = '0';
      }
    });
  }

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
