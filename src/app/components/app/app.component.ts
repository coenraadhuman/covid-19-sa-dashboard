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

  constructor(private snackBar: MatSnackBar) {
    setInterval(() => {
      this.getTable( 'https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu');
    }, this.updateInterval * 60 * 1000);
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
