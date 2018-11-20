import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const typed = new Typed('.welcome', {
      strings: ['Welcome', 'Bienvenido', 'Bienvenue'],
      smartBackspace: true, // Default value
      backDelay: 2000,
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '.',
    });
  }

}
