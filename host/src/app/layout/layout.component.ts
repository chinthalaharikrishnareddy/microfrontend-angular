import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthState } from '../auth/auth.selectors';
import { logout } from '../auth/auth.actions';
import { AppState } from '../app.state';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  username = 'Guest';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(selectAuthState).subscribe(state => {
      this.username = state.user?.username || 'Guest';
    });
  }

  onLogout() {
    this.store.dispatch(logout());
  }
}
