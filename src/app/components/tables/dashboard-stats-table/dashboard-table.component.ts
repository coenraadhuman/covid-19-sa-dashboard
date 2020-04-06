import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CountriesModel} from '../../../models/countries.model';
import {MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-stats-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  displayedColumns: string[] = ['Number', 'Country', 'TotalCases', 'TotalActive', 'TotalDeaths', 'TotalRecovered',
    'CasesToday', 'DeathsToday', 'CriticalCondition'];
  @Input() tableDataSource: CountriesModel[] = [];

  dataSource = new MatTableDataSource(this.tableDataSource);
  // @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    // this.dataSource.sort = this.sort;
  }

}
