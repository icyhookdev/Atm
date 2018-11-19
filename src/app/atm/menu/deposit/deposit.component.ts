import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { KeyboardService } from '../../shared/services/keyboard.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  fillDepositInput = '';

  depositForm: FormGroup;

  constructor(private keyboardService: KeyboardService) {
    this.keyboardService.deposit.subscribe(
      (num: string) => {
        console.log(num);
        if (num === 'd') {
          this.fillDepositInput = this.fillDepositInput.split('').slice(0, -1).join('');
        } else {
          this.fillDepositInput += num;
        }
      }
    );
  }

  ngOnInit() {
    this.depositForm = new FormGroup({
      'deposit': new FormControl(null)
    });

  }

  onSubmit() {
    console.log(this.depositForm);
  }

  onSelect(type: string) {
    this.keyboardService.onSelect(type);
  }
}
