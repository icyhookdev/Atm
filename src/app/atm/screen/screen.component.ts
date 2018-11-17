import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { KeyboardService } from '../shared/services/keyboard.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit, OnChanges {
  screenCase = false;

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit() {
    this.screenCase = this.keyboardService.showScreenC;
  }

  ngOnChanges() {

  }

}
