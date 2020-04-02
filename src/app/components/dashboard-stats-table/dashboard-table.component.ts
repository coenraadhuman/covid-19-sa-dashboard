import { Component, Input, OnInit } from '@angular/core';
import {CountriesModel} from '../../models/locations.model';

@Component({
  selector: 'app-stats-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  displayedColumns: string[] = ['Number', 'Country', 'TotalCases', 'TotalDeaths', 'TotalRecovered'];
  @Input() tableDataSource: CountriesModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}
