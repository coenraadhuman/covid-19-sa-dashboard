import { Component, OnInit } from '@angular/core';
import { LocationDetails, MultipleLocationsModel } from '../../models/locations.model';
import { SnackBarNotificationService } from '../../services/snack-bar-notification/snack-bar-notification.service';
import { DataRetrievalService } from '../../services/data-retrieval/data-retrieval.service';
import { DataTransformingService } from '../../services/data-transforming/data-transforming.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  private rawData = {} as MultipleLocationsModel;
  private southAfrica = {} as LocationDetails;
  private aggregatedLocations = [] as LocationDetails[];
  private topTenLocations = [] as LocationDetails[];

  private header = 'COVID-19 Pandemic';

  private isTableLoaded = false;
  private updateInterval = 15;
  private subscription: Subscription;

  constructor(private snackBar: SnackBarNotificationService,
              private dataRetrieval: DataRetrievalService,
              private dataTransforming: DataTransformingService) {
    setInterval(() => {
      this.getDashboard();
    }, this.updateInterval * 60 * 1000);
  }

  private getDashboard() {
    this.subscription = this.dataRetrieval.getLocationsData().subscribe(retrievedData => {
      this.rawData = {...retrievedData};
      this.checkRecoveryDataIssue();
      this.southAfrica = this.dataTransforming.retrieveSouthAfricaFromLocations(retrievedData.locations);
      this.aggregatedLocations = this.dataTransforming.aggregateLocationsData(retrievedData.locations);
      this.topTenLocations = [...this.aggregatedLocations].splice(0, 10);
      this.isTableLoaded = true;
    });
  }

  private checkRecoveryDataIssue() {
    if (this.rawData.latest.recovered === 0) {
      this.snackBar.openZeroRecoveriesIssue();
    }
  }

  ngOnInit(): void {
    this.getDashboard();
  }
}
