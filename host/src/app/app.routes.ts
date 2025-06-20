import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../../dashboard/src/app/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'users',
        loadChildren: () => import('../../../user-management/src/app/user/user.module').then(m => m.UserModule),
      },
    ]
  },

  // {
  //   path: 'dashboard',
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //       remoteName: 'dashboard',
  //       exposedModule: './DashboardModule',
  //     }).then((m) => m.DashboardModule),
  // },
  // {
  //   path: 'users',
  //   canActivate: [AuthGuard],
  //   data: { roles: ['admin'] },
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       remoteEntry: 'http://localhost:4202/remoteEntry.js',
  //       remoteName: 'userManagement',
  //       exposedModule: './UserModule',
  //     }).then((m) => m.UserModule),
  // },
  { path: 'login', component: LoginComponent },
  { path: 'logout', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
