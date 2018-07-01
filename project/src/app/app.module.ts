import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { MyNetworkComponent } from './my-network/my-network.component';
import { LoginComponentModule } from './login-component/login-component.module';
import { HomeViewComponentModule } from './home-view-component/home-view-component.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    MyNetworkComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    LoginComponentModule,
    HomeViewComponentModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
