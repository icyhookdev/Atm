import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit, OnChanges {
  @Input() fillInputPw: string;
  @ViewChild('inputPw') inputPw: ElementRef;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {

  }
}
