import {Component, Input, OnInit} from '@angular/core';
import {OverviewModel} from '../../models/overview.model';

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.scss']
})
export class OverviewTableComponent implements OnInit {

  displayedColumns: string[] = [ 'Total', 'Active', 'Critical', 'Deaths', 'Recovered'];
  @Input() tableDataSource: OverviewModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}
