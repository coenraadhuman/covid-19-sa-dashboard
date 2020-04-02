import { Injectable } from '@angular/core';
import { CountriesModel } from '../../models/countries.model';
import { SouthAfricaCasesDetailsModel } from '../../models/south-africa-cases-details.model';
import { SouthAfricaCaseModel } from '../../models/south-africa-case.model';
import {from} from 'rxjs';
import {groupBy, mergeMap, toArray} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataTransformingService {

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
      aggregatedResult.provinces.push({province: val[0].validators, count: val.length});
    });

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
}
