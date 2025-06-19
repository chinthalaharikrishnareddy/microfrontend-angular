import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout, toggleTheme } from './auth.actions';

export interface AuthState {
  user: { username: string; role: string } | null;
  error: string | null;
  loading: boolean;
  theme: 'light' | 'dark';
}

export const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
  theme: 'light',
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, loading: true, error: null })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    user: null,
  })),
  on(logout, (state) => ({
    ...state,
    user: null,
    error: null,
    loading: false,
  })),
  on(toggleTheme, (state, { theme }) => ({
    ...state,
    theme,
  }))
);
