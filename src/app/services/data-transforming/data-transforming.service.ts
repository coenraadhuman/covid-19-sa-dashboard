import { Injectable } from '@angular/core';
import { LocationDetails } from '../../models/locations.model';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataTransformingService {

  constructor() { }

  aggregateLocationsData(locations: LocationDetails[]): LocationDetails[]  {
    const aggregatedResult = [];
    const cloneLocations = [...locations];
    const source = from(cloneLocations);
    const groupedData = source.pipe(
        groupBy(location => location.country),
        mergeMap(group => group.pipe(toArray()))
    );

    const subscription = groupedData.subscribe(val => aggregatedResult.push(val.reduce(
        (country, x) => {
          country.country = x.country;
          country.latest.confirmed += x.latest.confirmed;
          country.latest.recovered += x.latest.recovered;
          country.latest.deaths += x.latest.deaths;
          country.coordinates = { latitude: '', longitude: ''};
          country.country_code = '';
          country.id = 0;
          country.country_population += x.country_population;
          country.province = '';
          country.last_updated = x.last_updated > country.last_updated ? x.last_updated : country.last_updated;
          return country;
        })));

    subscription.unsubscribe();

    return aggregatedResult
        .sort((a, b) => b.latest.confirmed - a.latest.confirmed);
  }

  retrieveSouthAfricaFromLocations(locations: LocationDetails[]): LocationDetails {
    let southAfrica = {} as LocationDetails;

    locations.forEach(x => {
      if (x.id === 200) {
        southAfrica = x;
      }
    });

    return southAfrica;
  }
}
