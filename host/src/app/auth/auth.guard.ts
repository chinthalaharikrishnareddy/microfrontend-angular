import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectUser } from './index';
import { AppState } from '../app.state';
import { selectAuthState } from './index';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(selectAuthState).pipe(
      map((auth) => {
        console.log('AuthGuard - User:', auth.user, 'Route:', route.url);
        if (!auth.user) {
          console.log('AuthGuard - No user, redirecting to /login');
          this.router.navigate(['/login']);
          return false;
        }
        const requiredRoles = route.data['roles'] as string[] | undefined;
        if (requiredRoles && !requiredRoles.includes(auth.user.role)) {
          console.log(`AuthGuard - User role ${auth.user.role} not in required roles:`, requiredRoles);
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
