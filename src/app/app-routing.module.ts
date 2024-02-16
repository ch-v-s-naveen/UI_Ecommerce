import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { MainComponent } from './common/main/main.component';
import { SignupComponent } from './common/signup/signup.component';

const routes: Routes = [
  // {
  //   path: 'l',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: MainComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
