import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenComponent } from './atm/screen/screen.component';
import { LoginComponent } from './atm/login/login.component';
import { MenuComponent } from './atm/menu/menu.component';
import { DepositComponent } from './atm/menu/deposit/deposit.component';
import { WithdrawComponent } from './atm/menu/withdraw/withdraw.component';
import { TransactionsComponent } from './atm/menu/transactions/transactions.component';

const appRoutes: Routes = [
  { path: '', component: ScreenComponent},
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'deposit', component: DepositComponent},
  { path: 'withdraw', component: WithdrawComponent},
  { path: 'transactions', component: TransactionsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
