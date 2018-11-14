import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { ScreenComponent } from './atm/screen/screen.component';
import { KeyboardComponent } from './atm/keyboard/keyboard.component';
import { AccountService } from './atm/shared/services/accounts.service';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    ScreenComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
