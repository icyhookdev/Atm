import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { ScreenComponent } from './atm/screen/screen.component';
import { KeyboardComponent } from './atm/keyboard/keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    ScreenComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
