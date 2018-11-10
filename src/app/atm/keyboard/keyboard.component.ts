import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @Output() showLogin = new EventEmitter<boolean>();
  @Output() presNumber = new EventEmitter<number>();
  @Output() delNumber = new EventEmitter<number>();

  allowInputPassword = false;
  constructor() { }

  ngOnInit() {
  }

  onInsertCard() {
    this.showLogin.emit(true);
    this.allowInputPassword = true;
  }

  onPressNumber(num: number) {
    if (this.allowInputPassword) {
      this.presNumber.emit(num);
    }
  }

  onDelNumber() {
    this.delNumber.emit(1);
  }
}
