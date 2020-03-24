import {Component, Input, OnInit} from '@angular/core';
import {Table} from '../../models/api-reports.model';

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.scss']
})
export class StatsTableComponent implements OnInit {

  displayedColumns: string[] = ['Number', 'Country', 'TotalCases', 'ActiveCases', 'NewCases', 'TotalDeaths', 'NewDeaths', 'TotalRecovered'];
  @Input() tableDataSource: Table[] = [];

  constructor() { }

  ngOnInit() {
  }

}
