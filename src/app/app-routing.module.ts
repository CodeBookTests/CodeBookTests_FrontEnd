import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ExamUIComponent } from './exam-ui/exam-ui.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ExamSelectionComponent } from './exam-selection/exam-selection.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'user_registration' ,component:UserRegistrationComponent},
  {path:'user_login' , component:UserLoginComponent},
  {path:'admin_login' ,component:AdminLoginComponent},
  {path:'exam_ui',component:ExamUIComponent},
  {path:'userDashboard',component:UserDashboardComponent},
  {path:'userNavBar',component:MenuBarComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'exam_selection',component:ExamSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
