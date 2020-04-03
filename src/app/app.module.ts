import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSliderModule,
    MatTableModule,
    MatToolbarModule,
    MatChipsModule,
} from '@angular/material';
import { DashboardTableComponent } from './components/dashboard-stats-table/dashboard-table.component';
import { HeaderComponent } from './components/header/header.component';
import { ChartsModule } from 'ng2-charts';
import { TimelineGraphComponent } from './components/timeline-graph/timeline-graph.component';
import { DataRetrievalService } from './services/data-retrieval/data-retrieval.service';
import { SnackBarNotificationService } from './services/snack-bar-notification/snack-bar-notification.service';
import { DataTransformingService } from './services/data-transforming/data-transforming.service';
import { AllStatsTableComponent } from './pages/all-stats-table/all-stats-table.component';
import { RouterOutletComponent } from './components/router-outlet/router-outlet.component';
import { DataStoreService } from './services/data-store/data-store.service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CardTitleComponent } from './components/title/card-title.component';
import { SaTableComponent } from './components/sa-table/sa-table.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    RouterOutletComponent,
    DashboardComponent,
    DashboardTableComponent,
    HeaderComponent,
    TimelineGraphComponent,
    AllStatsTableComponent,
    ProgressBarComponent,
    CardTitleComponent,
    SaTableComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        BrowserAnimationsModule,
        MatSliderModule,
        MatTableModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatSnackBarModule,
        ChartsModule,
        MatChipsModule,
    ],
  providers: [
      DataRetrievalService,
      DataTransformingService,
      DataStoreService,
      SnackBarNotificationService,
  ],
  bootstrap: [RouterOutletComponent]
})
export class AppModule { }
