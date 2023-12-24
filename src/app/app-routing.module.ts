import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUsersComponent } from './components/get-users/get-users.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
const routes: Routes = [
  {path: 'app-login', component: LoginComponent} ,
  {path: 'app-welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
