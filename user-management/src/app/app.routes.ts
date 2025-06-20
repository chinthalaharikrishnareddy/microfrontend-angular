import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'users',
    component: UserComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
