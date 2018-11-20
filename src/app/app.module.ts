import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { ScreenComponent } from './atm/screen/screen.component';
import { KeyboardComponent } from './atm/keyboard/keyboard.component';
import { AccountService } from './atm/shared/services/accounts.service';
import { LoginComponent } from './atm/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { KeyboardService } from './atm/shared/services/keyboard.service';
import { MenuComponent } from './atm/menu/menu.component';
import { DepositComponent } from './atm/menu/deposit/deposit.component';
import { WithdrawComponent } from './atm/menu/withdraw/withdraw.component';
import { TransactionsComponent } from './atm/menu/transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    ScreenComponent,
    KeyboardComponent,
    LoginComponent,
    MenuComponent,
    DepositComponent,
    WithdrawComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AccountService, KeyboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
