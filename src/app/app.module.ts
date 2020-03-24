import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatProgressBarModule, MatSliderModule, MatTableModule, MatToolbarModule} from '@angular/material';
import { StatsTableComponent } from './components/stats-table/stats-table.component';
import { HeaderComponent } from './components/header/header.component';
import { OverviewTableComponent } from './components/overview-table/overview-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsTableComponent,
    HeaderComponent,
    OverviewTableComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }