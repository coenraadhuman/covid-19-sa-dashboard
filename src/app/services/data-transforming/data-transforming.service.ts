import { Injectable } from '@angular/core';
import {CountriesModel} from '../../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class DataTransformingService {

  constructor() { }

  retrieveSouthAfricaFromLocations(locations: CountriesModel[]): CountriesModel {
    let southAfrica = {} as CountriesModel;

    locations.forEach(x => {
      if (x.country === 'South Africa') {
        southAfrica = {...x};
      }
    });

    return southAfrica;
  }
}
