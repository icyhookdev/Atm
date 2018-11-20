import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { KeyboardService } from '../shared/services/keyboard.service';


@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @Output() showLogin = new EventEmitter<boolean>();
  @Output() delNumber = new EventEmitter<number>();

  showInOrRemCard = false;
  constructor(private keyboardService: KeyboardService) { }

  ngOnInit() {
  }

  onInsertCard() {
    this.showLogin.emit(true);
    this.showInOrRemCard = !this.showInOrRemCard;
  }

  onRemoveCard() {
    this.showInOrRemCard = !this.showInOrRemCard;
    this.keyboardService.showScreenC = true;
  }

  onPressNumber(num: string) {
    if (this.keyboardService.allowId) {
      this.keyboardService.id.emit(num);
    } else if (this.keyboardService.allowPassword) {
      this.keyboardService.password.emit(num);
    } else if (this.keyboardService.allowDeposit) {
      this.keyboardService.deposit.emit(num);
    } else if (this.keyboardService.allowWithdraw) {
      this.keyboardService.withdraw.emit(num);
    }
  }

  onSelect(type: string) {
    this.keyboardService.onSelect(type);
  }
}
