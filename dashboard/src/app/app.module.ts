import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { DashboardModule } from './dashboard/dashboard.module';
import { StoreModule } from '@ngrx/store';
// import { AppState } from '../../../host/src/app/auth';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    // DashboardModule,
    StoreModule.forRoot({}, { metaReducers: [] }),
  ],
  bootstrap: [],
})
export class AppModule {}
