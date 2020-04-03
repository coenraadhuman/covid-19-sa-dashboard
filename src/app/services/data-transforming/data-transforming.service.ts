import { Injectable } from '@angular/core';
import { CountriesModel } from '../../models/countries.model';
import {ProvinceCount, SouthAfricaCasesDetailsModel} from '../../models/south-africa-cases-details.model';
import { SouthAfricaCaseModel } from '../../models/south-africa-case.model';
import {from} from 'rxjs';
import {groupBy, mergeMap, toArray} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataTransformingService {

  provinceNames = [
    {key: 'GP', name: 'Gauteng'},
    {key: 'WC', name: 'Western Cape'},
    {key: 'KZN', name: 'KwaZulu-Natal'},
    {key: 'FS', name: 'Free State'},
    {key: 'MP', name: 'Mpumalanga'},
    {key: 'NW', name: 'North West'},
    {key: 'LP', name: 'Limpopo'},
    {key: 'EC', name: 'Eastern Cape'},
    {key: 'NC', name: 'Northern Cape'},
  ];

  constructor() { }

  public aggregateSouthAfricaCases(cases: SouthAfricaCaseModel[]): SouthAfricaCasesDetailsModel {
    const aggregatedResult: SouthAfricaCasesDetailsModel = {
      provinces: [],
      genders: [],
      ages: []
    };
    const cloneCases = [...cases];
    const source = from(cloneCases);

    const groupedByAge = source.pipe(
        groupBy(x => x.age.trim()),
        mergeMap(group => group.pipe(toArray()))
    );

    let subscription = groupedByAge.subscribe(val => {
      aggregatedResult.ages.push({age: val[0].age, count: val.length});
    });

    subscription.unsubscribe();

    const groupedByProvince = source.pipe(
        groupBy(x => x.validators.trim()),
        mergeMap(group => group.pipe(toArray()))
    );

    subscription = groupedByProvince.subscribe(val => {
      aggregatedResult.provinces.push({province: this.getProperProvinceName(val[0].validators), count: val.length});
    });

    aggregatedResult.provinces = aggregatedResult.provinces.filter(x => x.province !== 'UNK');
    const totals: ProvinceCount = {
      province: 'Total',
      count: 0
    };
    aggregatedResult.provinces.forEach(x => {
      totals.count += x.count;
    });
    aggregatedResult.provinces.push(totals);
    aggregatedResult.provinces = aggregatedResult.provinces.sort((a, b) => b.count - a.count);

    subscription.unsubscribe();

    const groupedByGender = source.pipe(
        groupBy(x => x.gender.trim()),
        mergeMap(group => group.pipe(toArray()))
    );

    subscription = groupedByGender.subscribe(val => {
      aggregatedResult.genders.push({gender: val[0].gender, count: val.length});
    });

    subscription.unsubscribe();

    return aggregatedResult;
  }

  public retrieveSouthAfricaFromLocations(locations: CountriesModel[]): CountriesModel {
    let southAfrica = {} as CountriesModel;

    locations.forEach(x => {
      if (x.country === 'South Africa') {
        southAfrica = {...x};
      }
    });

    return southAfrica;
  }

  public getProperProvinceName(key: string): string {
    let name = key;
    this.provinceNames.forEach(x => {
      if (key.includes(x.key)) {
        name = x.name;
      }
    });
    return name;
  }
}
