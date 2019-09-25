import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { UserService } from './providers/user.service';
import { Routes, RouterModule }  from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './providers/auth.service';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: UserComponent,}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
