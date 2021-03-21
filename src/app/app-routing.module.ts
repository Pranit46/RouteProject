import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardOneComponent } from './dashboard-one/dashboard-one.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'sign', component:  SignupComponent },
  { path:'Dashboard1', component:  DashboardOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
