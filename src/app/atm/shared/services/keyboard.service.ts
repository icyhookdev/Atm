import { EventEmitter } from '@angular/core';


export class KeyboardService {
  allowId = false;
  allowPassword = false;

  id = new EventEmitter<string>();
  password = new EventEmitter<string>();

  constructor() { }

  onSelect(type: string) {
    this.allowId = false;
    this.allowPassword = false;

    if (type === 'id') {
      this.allowId = !this.allowId;
    } else if (type === 'password') {
      this.allowPassword = !this.allowPassword;
    }
  }
}

