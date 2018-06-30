import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginBaseComponent } from './login-base/login-base.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TopBarComponent,
    LoginBaseComponent
  ],
  exports: [
    TopBarComponent,
    LoginBaseComponent
  ]
})
export class LoginComponentModule { }
