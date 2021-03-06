import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginBaseComponent } from './login-base/login-base.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginBottomComponent } from './login-bottom/login-bottom.component';
import { FormsModule } from '@angular/forms';
import { LoginFooterComponent } from './login-footer/login-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TopBarComponent,
    LoginBaseComponent,
    SignUpComponent,
    LoginBottomComponent,
    LoginFooterComponent
  ],
  exports: [
    TopBarComponent,
    LoginBaseComponent,
    LoginBottomComponent
  ]
})
export class LoginComponentModule { }
