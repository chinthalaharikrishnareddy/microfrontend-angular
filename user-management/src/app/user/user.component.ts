import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAdmin, selectTheme } from '../../../../host/src/app/auth/auth.selectors';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppState } from '../../../../host/src/app/auth';
import { HttpClientModule } from '@angular/common/http';
import { CapitalizeFirstPipe } from './capitalize.pipe';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
  imports:[CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, CapitalizeFirstPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserComponent implements OnInit {
  isAdmin$: Observable<boolean>;
  theme$: Observable<string>;
  users: any[] = [];
  userForm: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder, private http: HttpClient) {
    this.isAdmin$ = this.store.select(selectIsAdmin);
    this.theme$ = this.store.select(selectTheme);
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.http.get('https://api.github.com/users').subscribe((data: any) => {
      this.users = data;
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      this.userForm.reset();
    }
  }
}
