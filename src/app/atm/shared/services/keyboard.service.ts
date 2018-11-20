import { EventEmitter } from '@angular/core';


export class KeyboardService {
  showScreenC = false;

  allowId = false;
  allowPassword = false;
  allowDeposit = false;
  allowWithdraw = false;

  id = new EventEmitter<string>();
  password = new EventEmitter<string>();
  deposit = new EventEmitter<string>();
  withdraw = new EventEmitter<string>();

  constructor() { }

  onSelect(type: string) {
    this.allowId = false;
    this.allowPassword = false;
    this.allowDeposit = false;
    this.allowWithdraw = false;

    if (type === 'id') {
      this.allowId = !this.allowId;
    } else if (type === 'password') {
      this.allowPassword = !this.allowPassword;
    } else if (type === 'deposit') {
      this.allowDeposit = !this.allowDeposit;
    } else if (type === 'withdraw') {
      this.allowWithdraw = !this.allowWithdraw;
    }
  }
}

