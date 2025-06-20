import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTheme } from '../../../../host/src/app/auth/auth.selectors';
import { ChartConfiguration } from 'chart.js';
// import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../host/src/app/shared/shared.module';
import { AppState } from '../../../../host/src/app/auth';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  theme$: Observable<string>;
  // barChartData: ChartConfiguration<'bar'>['data'] = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  //   datasets: [
  //     { data: [65, 59, 80, 81, 56], label: 'Sales', backgroundColor: '#007bff' },
  //   ],
  // };
  // barChartOptions: ChartConfiguration<'bar'>['options'] = {
  //   responsive: true,
  // };

  constructor(private store: Store<AppState>) {
    this.theme$ = this.store.select(selectTheme);
  }

  ngOnInit(): void {}
}
