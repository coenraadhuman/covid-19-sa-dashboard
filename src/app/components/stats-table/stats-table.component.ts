import { Component, Input, OnInit } from '@angular/core';
import { LocationLs } from '../../models/locations.model';

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.scss']
})
export class StatsTableComponent implements OnInit {

  displayedColumns: string[] = ['Number', 'Country', 'TotalCases', 'TotalDeaths', 'TotalRecovered'];
  @Input() tableDataSource: LocationLs[] = [];

  constructor() { }

  ngOnInit() {
  }

}
