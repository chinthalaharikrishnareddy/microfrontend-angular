import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout, toggleTheme } from './auth/auth.actions';
import { selectIsAdmin, selectTheme } from './auth/auth.selectors';
import { AppState } from './auth';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports:[CommonModule, FormsModule, ReactiveFormsModule, RouterModule, SharedModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isAdmin$: Observable<boolean>;
  theme$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.isAdmin$ = this.store.select(selectIsAdmin);
    this.theme$ = this.store.select(selectTheme);
  }

  toggleTheme() {
    this.store.select(selectTheme).subscribe((currentTheme) => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      this.store.dispatch(toggleTheme({ theme: newTheme }));
    });
  }

  logout() {
    this.store.dispatch(logout());
    window.location.href = '/login';
  }
}
