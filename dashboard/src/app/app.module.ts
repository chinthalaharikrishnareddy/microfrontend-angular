import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { DashboardModule } from './dashboard/dashboard.module';
import { StoreModule } from '@ngrx/store';
// import { AppState } from '../../../host/src/app/auth';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    // DashboardModule,
    StoreModule.forRoot({}, { metaReducers: [] }),
    RouterModule.forChild(routes)
  ],
  bootstrap: [],
})
export class AppModule {}
