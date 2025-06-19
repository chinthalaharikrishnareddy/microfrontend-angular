import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from './auth.service';
import { login, loginSuccess, loginFailure } from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    if (!this.actions$) {
      console.error('AuthEffects: actions$ is undefined');
      return of();
    }
    return this.actions$.pipe(
      ofType(login),
      mergeMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          map((user) => (user ? loginSuccess({ user }) : loginFailure({ error: 'Invalid credentials' }))),
          catchError((error) => of(loginFailure({ error: error.message || 'Login failed' })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {
    console.log('AuthEffects constructor: actions$', this.actions$, 'authService', this.authService);
  }
}
