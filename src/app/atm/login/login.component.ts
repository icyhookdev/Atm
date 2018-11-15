import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../shared/services/accounts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() fillInputPw: string;

  loginForm: FormGroup;
  logIn: boolean;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
    });
  }

  onSubmit() {
    this.logIn = this.accountService.validateAccount(this.loginForm.value.id, this.loginForm.value.password);
  }
}
