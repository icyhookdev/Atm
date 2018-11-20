import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AccountService } from '../shared/services/accounts.service';
import { KeyboardService } from '../shared/services/keyboard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy {
  fillInputPw = '';
  fillInputId = '';

  checkIdInput: boolean;
  checkPwInput: boolean;

  loginForm: FormGroup;
  logIn: boolean;

  constructor(private accountService: AccountService,
              private keyboardService: KeyboardService,
              private route: ActivatedRoute,
              private router: Router) {
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
    if (this.logIn) {
      this.router.navigate(['../menu'], {relativeTo: this.route});
    }
  }

  onSelect(type: string) {
    this.keyboardService.onSelect(type);
    this.checkIdInput = this.keyboardService.allowId;
    this.checkPwInput = this.keyboardService.allowPassword;
  }

  ngOnDestroy() {
    // this.keyboardService.id.unsubscribe();
    // this.keyboardService.password.unsubscribe();
  }
}
