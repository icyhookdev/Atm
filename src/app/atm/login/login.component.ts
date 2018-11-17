import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, OnDestroy } from '@angular/core';
import { AccountService } from '../shared/services/accounts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { KeyboardService } from '../shared/services/keyboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy {
  fillInputPw = '';
  fillInputId = '';

  loginForm: FormGroup;
  logIn: boolean;

  constructor(private accountService: AccountService, private keyboardService: KeyboardService) {
    this.keyboardService.password.subscribe(
      (num: string) => {
        if (num === 'd') {
          this.fillInputPw = this.fillInputPw.split('').slice(0, -1).join('');
        } else {
          this.fillInputPw += num;
        }
      }
    );
    this.keyboardService.id.subscribe(
      (num: string) => {
        if (num === 'd') {
          this.fillInputId  = this.fillInputId .split('').slice(0, -1).join('');
        } else {
          this.fillInputId += num;
        }
      }
    );
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
    });
  }

  ngOnChanges() {
  }

  onSubmit() {
    this.logIn = this.accountService.validateAccount(this.loginForm.value.id, this.loginForm.value.password);
  }

  onSelect(type: string) {
    console.log(this.keyboardService.password);
    this.keyboardService.onSelect(type);
  }

  ngOnDestroy() {

  }
}
