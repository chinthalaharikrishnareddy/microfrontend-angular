import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(username: string, password: string): Observable<{ username: string; role: string } | null> {
    // Mock login: admin for username 'admin', viewer otherwise
    if (username === 'admin' && password === 'password') {
      return of({ username, role: 'admin' }).pipe(delay(500));
    } else if (username && password) {
      return of({ username, role: 'viewer' }).pipe(delay(500));
    }
    return of(null).pipe(delay(500));
  }
}
