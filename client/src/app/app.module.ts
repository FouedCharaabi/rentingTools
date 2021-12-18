import { ToolsComponent } from './tools/tools.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbareComponent } from './navbare/navbare.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    UserProfileComponent,
    NavbareComponent,
    UpdateProfileComponent,
    SignupComponent,
    ToolsComponent,
    AdminComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,

    FormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'user', component: UserProfileComponent },
      { path: 'user/update', component: UpdateProfileComponent },
      { path: 'users/signup', component: SignupComponent },
      { path: 'tools', component: ToolsComponent },
      { path: 'user/forgot', component: ForgotPasswordComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
