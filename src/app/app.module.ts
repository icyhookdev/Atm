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

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    ScreenComponent,
    KeyboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
