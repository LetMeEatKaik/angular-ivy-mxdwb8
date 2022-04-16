import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// newly added routing for nav
import { HomeComponent } from './home';
// import { LoginComponent } from './login';
import { RegisterComponent } from './register';

const routes: Routes = [
  //  new
  { path: '', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const appRoutingModule = RouterModule.forRoot(routes);
