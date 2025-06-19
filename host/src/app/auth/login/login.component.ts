import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../auth.actions';
import { Router } from '@angular/router';
import { AppState } from '../index';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.loginForm.value) {
      this.store.dispatch({
        type: '[Auth] Set User',
        payload: { username: this.loginForm.value?.username, role: 'admin' },
      });
      // Debug navigation attempt
      console.log('Attempting navigation to /dashboard');
      this.router.navigate(['/dashboard']).then((success) => {
        console.log('Navigation to /dashboard:', success ? 'Success' : 'Failed');
      }).catch((error) => {
        console.error('Navigation error:', error);
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
