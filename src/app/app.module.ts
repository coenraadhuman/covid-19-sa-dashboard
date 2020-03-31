import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
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
import { StatsTableComponent } from './components/stats-table/stats-table.component';
import { HeaderComponent } from './components/header/header.component';
import { ChartsModule } from 'ng2-charts';
import { TimelineGraphComponent } from './components/timeline-graph/timeline-graph.component';
import { DataRetrievalService } from './services/data-retrieval/data-retrieval.service';
import { SnackBarNotificationService } from './services/snack-bar-notification/snack-bar-notification.service';
import { DataTransformingService } from './services/data-transforming/data-transforming.service';

@NgModule({
  declarations: [
    DashboardComponent,
    StatsTableComponent,
    HeaderComponent,
    TimelineGraphComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
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
      SnackBarNotificationService,
  ],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
