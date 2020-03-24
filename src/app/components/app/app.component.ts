import {Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {ApiReportsModel, Table} from '../../models/api-reports.model';
import {OverviewModel} from '../../models/overview.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  data: ApiReportsModel;

  overviewHeader = 'COVID-19 Pandemic Overview';
  overviewIcon = 'assessment';

  southAfricaHeader = 'South Africa COVID-19 Statistics';
  southAfricaIcon = 'place';

  worldHeader = 'Top 5 Most Affected Countries by COVID-19';
  worldIcon = 'language';

  overviewTableData: OverviewModel[] = [];
  southAfricaTableData: Table[] = [];
  worldTableData: Table[] = [];

  isLoaded = false;
  updateInterval = 15;

  constructor(private http: HttpClient) {
    setInterval(() => {
      this.getHTMLFile('https://covid19-server.chrismichael.now.sh/api/v1/AllReports');
    }, this.updateInterval * 60 * 1000);
  }

  getHTMLFile(url: string) {
    this.http.get<ApiReportsModel>(url, {responseType: 'json'})
      .subscribe(data => {
        this.data = data as ApiReportsModel;
        this.southAfricaTableData = data.reports[0].table[0].filter(x => x.Country === 'South Africa');
        this.worldTableData = data.reports[0].table[0].splice(0, 5);
        this.overviewTableData = [ {
          total: data.reports[0].cases,
          critical: data.reports[0].active_cases[0].criticalStates,
          active: data.reports[0].active_cases[0].currently_infected_patients,
          deaths: data.reports[0].closed_cases[0].deaths,
          recovered: data.reports[0].closed_cases[0].recovered
        } ];
        this.isLoaded = true;
      });
  }

  ngOnInit(): void {
    this.getHTMLFile('https://covid19-server.chrismichael.now.sh/api/v1/AllReports');
  }
}
