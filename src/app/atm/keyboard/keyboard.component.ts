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


  allowInputPassword = false;
  constructor(private keyboardService: KeyboardService) { }

  ngOnInit() {
  }

  onInsertCard() {
    this.showLogin.emit(true);
    this.allowInputPassword = true;
  }

  onPressNumber(num: string) {
    if (this.keyboardService.allowId) {
      this.keyboardService.id.emit(num);
    } else if (this.keyboardService.allowPassword) {
      this.keyboardService.password.emit(num);
    }

    console.log(this.keyboardService.id, this.keyboardService.password);
  }

  onSelect(type: string) {
    this.keyboardService.onSelect(type);
  }

  onDelNumber() {
    this.delNumber.emit(1);
  }
}
