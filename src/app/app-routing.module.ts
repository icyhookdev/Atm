import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenComponent } from './atm/screen/screen.component';
import { LoginComponent } from './atm/login/login.component';

const appRoutes: Routes = [
  { path: '', component: ScreenComponent},
  { path: 'login', component: LoginComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
