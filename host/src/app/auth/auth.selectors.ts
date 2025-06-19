import { createSelector } from '@ngrx/store';
// import { AppState } from '../app.state';
import { AuthState } from './auth.reducer';
import { AppState } from './index';

export const selectAuthState = (state: AppState) => state.auth;
export const selectIsAdmin = createSelector(selectAuthState, (state) => state.user?.role === 'admin');
export const selectTheme = createSelector(
  selectAuthState,
  (state: AuthState) => state.theme
);
