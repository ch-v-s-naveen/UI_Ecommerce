import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './user/login/login.component';
import { MainComponent } from './common/main/main.component';
import { SignupComponent } from './common/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin/admin.component';
import { SellerComponent } from './seller/seller/seller.component';
import { LoginSellerComponent } from './seller/login-seller/login-seller.component';
import { SellersignupComponent } from './seller/sellersignup/sellersignup.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './admin/adminsignup/adminsignup.component';
import { AdminService } from './admin/admin.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    MainComponent,
    SignupComponent,
    AdminComponent,
    SellerComponent,
    LoginSellerComponent,
    SellersignupComponent,
    AdminloginComponent,
    AdminsignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AdminService],
  bootstrap: [AppComponent],
})
export class AppModule {}
