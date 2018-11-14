import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { AccountService } from '../shared/services/accounts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit, OnChanges {
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

  ngOnChanges() {

  }

  onSubmit() {
    this.logIn = this.accountService.validateAccount(this.loginForm.value.id, this.loginForm.value.password);
  }
}
