import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { KeyboardService } from '../../shared/services/keyboard.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  fillWithdrawInput = '';

  withdrawForm: FormGroup;

  constructor(private keyboardService: KeyboardService) {
    this.keyboardService.withdraw.subscribe(
      (num: string) => {
        if (num === 'd') {
          this.fillWithdrawInput = this.fillWithdrawInput.split('').slice(0, -1).join('');
        } else {
          this.fillWithdrawInput += num;
        }
      }
    );
  }

  ngOnInit() {
    this.withdrawForm = new FormGroup({
      'withdraw': new FormControl(null)
    });

  }

  onSubmit() {
    console.log(this.withdrawForm);
  }

  onSelect(type: string) {
    this.keyboardService.onSelect(type);
  }
}
