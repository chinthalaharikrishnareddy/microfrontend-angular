import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../auth.actions';
import { Router } from '@angular/router';
import { AppState } from '../index';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { selectAuthState } from '../auth.selectors';
import { filter, take } from 'rxjs/operators';
import { setUser } from '../auth.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.store.select(selectAuthState).subscribe(state => {
      console.log('Auth State:', state);
    });
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.loginForm.value) {
      this.store.dispatch(
        setUser({ user: { username: this.loginForm.value.username, role: 'admin' } })
      );

      console.log('Attempting navigation to /dashboard');
      this.router
      .navigate(['/dashboard'])
      .then(() => console.log('Navigation succeeded'))
      .catch((err) => {
        console.error('Navigation failed:', err);
      });
    } else {
      this.store.dispatch({
        type: '[Auth] Login Failure',
        payload: 'Invalid credentials',
      });
    }
    }
  }
}
