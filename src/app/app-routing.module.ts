import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { MainComponent } from './common/main/main.component';
import { SignupComponent } from './common/signup/signup.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { LoginSellerComponent } from './seller/login-seller/login-seller.component';
import { AdminsignupComponent } from './admin/adminsignup/adminsignup.component';
import { SellersignupComponent } from './seller/sellersignup/sellersignup.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'login',
        component: AdminloginComponent,
      },
      {
        path: 'signup',
        component: AdminsignupComponent,
      },
    ],
  },

  {
    path: 'buyer',

    children: [
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
    ],
  },

  {
    path: 'seller',
    children: [
      {
        path: 'login',
        component: LoginSellerComponent,
      },
      {
        path: 'signup',
        component: SellersignupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
