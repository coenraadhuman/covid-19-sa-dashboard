import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { groupBy, mergeMap, toArray} from 'rxjs/operators';
import { from } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { LocationDetails, MultipleLocationsModel } from '../../models/locations.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    initialLocations: LocationDetails[];

  data: MultipleLocationsModel = {
    latest: {
      confirmed: 0,
      deaths: 0,
      recovered: 0
    },
    locations: []
  };

  sa: LocationDetails = {
      latest: {
          confirmed: 0,
          deaths: 0,
          recovered: 0
      },
      coordinates: {
          latitude: '',
          longitude: ''
      },
      country: '',
      country_code: '',
      country_population: 0,
      id: 0,
      last_updated: Date.prototype,
      province: '',
      timelines: null
  };

  header = 'COVID-19 Pandemic';

  isTableLoaded = false;
  updateInterval = 15;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    setInterval(() => {
      this.getTable( 'https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu');
    }, this.updateInterval * 60 * 1000);
  }

  getTable(url: string) {
    this.http.get<MultipleLocationsModel>(url, {responseType: 'json'})
      .subscribe(data => {

          this.initialLocations = [...data.locations];

          this.getSa(this.initialLocations);

          this.data = data;

          this.aggregateData(this.initialLocations);

          if (this.data.latest.recovered === 0) {
            this.openSnackBar();
          }

          this.isTableLoaded = true;
      });
  }

    aggregateData(locations: LocationDetails[]) {
      const source = from(locations);

      const example = source.pipe(
          groupBy(location => location.country),
          mergeMap(group => group.pipe(toArray()))
      );

      const newLocations = [];

      const subscribe = example.subscribe(val => newLocations.push(val.reduce(
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

      this.data.locations = newLocations
          .sort((a, b) => b.latest.confirmed - a.latest.confirmed)
          .splice(0, 10);

      subscribe.unsubscribe();
  }

  getSa(locations: LocationDetails[]) {
      locations.forEach(x => {
          if (x.id === 200) {
              this.sa = x;
          }
      });
  }

  ngOnInit(): void {
    this.getTable('https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu');
  }

    openSnackBar() {
        this.snackBar.open('"JHU (our main data provider) ' +
            'no longer provides data for amount of recoveries, and as a result, ' +
            'the API will be showing 0 for this statistic. Apologies for any inconvenience. ' +
            'Hopefully we\'ll be able to find an alternative data-source that offers this."', 'Close', {
            duration: 20000,
        });
    }
}
