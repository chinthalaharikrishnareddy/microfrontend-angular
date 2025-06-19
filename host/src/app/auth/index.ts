import { Action, ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app.state';
import { AuthState } from './auth.reducer';
export * from './auth.actions';
export * from './auth.reducer';
export * from './auth.effects';
export * from './auth.service';
export * from './auth.guard';
export * from '../app.state'; // Export AppState

export const selectAuthState = (state: AppState) => state.auth;
export const selectUser = (state: AppState) => state.auth.user;
export const selectError = (state: AppState) => state.auth.error;
export const selectLoading = (state: AppState) => state.auth.loading;
