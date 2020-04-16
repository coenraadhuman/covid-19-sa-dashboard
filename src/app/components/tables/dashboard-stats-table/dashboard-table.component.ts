import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { DataStoreService } from '../../../services/data-store/data-store.service';
import { CountriesModel } from '../../../models/countries.model';
import { AppState, COUNTRIES } from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CountriesReducer } from '../../../store/countries/countries.reducer';

@Component({
  selector: 'app-stats-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent implements OnInit {
  displayedColumns: string[] = [
    'Number',
    'country',
    'cases',
    'active',
    'deaths',
    'recovered',
    'todayCases',
    'todayDeaths',
    'critical',
  ];

  subscription: Subscription;

  totalObject: CountriesModel;
  dataSource;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public dataStore: DataStoreService,
    public store: Store<AppState>
  ) {
    this.store.select(COUNTRIES).subscribe((countries: CountriesReducer) => {
      if (this.dataStore.showTopTen) {
        this.totalObject = countries.topTenLocationsTotals;
        this.dataSource = new MatTableDataSource(countries.topTenLocations);
      } else {
        this.totalObject = countries.locationsTotals;
        this.dataSource = new MatTableDataSource(countries.locations);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
