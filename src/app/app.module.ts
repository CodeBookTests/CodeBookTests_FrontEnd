import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { ExamUIComponent } from './exam-ui/exam-ui.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
=======
import { ExamSelectionComponent } from './exam-selection/exam-selection.component';
import { ExamUIComponent } from './exam-ui/exam-ui.component';

>>>>>>> bcd2d4678496efd9e1739d1323414a9c7509217e
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AdminLoginComponent,
    HomeComponent,
<<<<<<< HEAD
    ExamUIComponent,
    MenuBarComponent,
    UserDashboardComponent,
    AboutUsComponent
=======
    ExamSelectionComponent,
    ExamUIComponent
>>>>>>> bcd2d4678496efd9e1739d1323414a9c7509217e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
