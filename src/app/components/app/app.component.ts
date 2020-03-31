import { Component, OnInit } from '@angular/core';
import { LocationDetails, MultipleLocationsModel } from '../../models/locations.model';
import { SnackBarNotificationService } from '../../services/snack-bar-notification/snack-bar-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  rawData = {} as MultipleLocationsModel;
  southAfrica = {} as LocationDetails;
  aggregatedLocations = [] as LocationDetails[];

  header = 'COVID-19 Pandemic';

  isTableLoaded = false;
  updateInterval = 15;

  constructor(private snackBar: SnackBarNotificationService) {
    setInterval(() => {
      this.getDashboard();
    }, this.updateInterval * 60 * 1000);
  }

  private getDashboard() {

  }

  ngOnInit(): void {

  }
}
