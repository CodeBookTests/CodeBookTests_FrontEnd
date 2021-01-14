import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ExamSelectionComponent } from './exam-selection/exam-selection.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'user_registration' ,component:UserRegistrationComponent},
  {path:'user_login' , component:UserLoginComponent},
  {path:'admin_login' ,component:AdminLoginComponent},
  {path:'exam_selection',component:ExamSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
