import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { StoreModule } from '@ngrx/store';
import { AppState } from '../../../host/src/app/auth';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    UserModule,
    StoreModule.forRoot({}, { metaReducers: [] }),
  ],
  bootstrap: [],
})
export class AppModule {}
