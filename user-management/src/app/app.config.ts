import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppState } from '../../../host/src/app/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore<AppState>(), // Empty store; state managed by host
    provideEffects([]), // No effects in dashboard
  ],
};
