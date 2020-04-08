import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllStatsTableComponent } from './pages/all-stats-table/all-stats-table.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { SouthAfricaPageComponent } from './pages/south-africa-page/south-africa-page.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'timeline/:country', component: TimelineComponent },
  { path: 'table-all-locations', component: AllStatsTableComponent },
  { path: 'south-africa', component: SouthAfricaPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
