import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'error',
  component: ErrorComponent
}, {
  path: '**',
  redirectTo: 'error',
  pathMatch: 'full'
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
