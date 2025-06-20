import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../../host/src/app/shared/shared.module';
// import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

const routes: Routes = [
  { path: '', component: DashboardComponent },
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardComponent,
    RouterModule.forChild(routes),
  ],
  exports: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
