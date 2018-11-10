import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js';



@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {
  showScreen = false;
  constructor() { }

  ngOnInit() {
    const typed = new Typed('.element', {
      strings: ['Mas Que Un Banco.', 'Agentes Efectivos en el Area.', 'Inter Bank Donde Todo Es Posible.'],
      smartBackspace: true, // Default value
      backDelay: 2000,
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      loopCount: Infinity,
    });
  }

}
