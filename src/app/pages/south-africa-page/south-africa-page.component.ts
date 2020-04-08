import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store/data-store.service';
import { Gtag } from 'angular-gtag';
import { DataLoadService } from '../../services/data-load/data-load.service';

@Component({
  selector: 'app-south-africa-page',
  templateUrl: './south-africa-page.component.html',
  styleUrls: ['./south-africa-page.component.scss'],
})
export class SouthAfricaPageComponent implements OnInit {
  constructor(
    private dataStore: DataStoreService,
    private dataLoad: DataLoadService,
    public gtag: Gtag
  ) {}

  ngOnInit() {
    this.dataLoad.loadData();
  }
}
