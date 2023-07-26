import { Component } from '@angular/core';
import * as AOS from 'aos';
import { ServiceService } from '../service.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(public service: ServiceService) {}

  ngOnInit() {
    AOS.init();
    const typed = new Typed('#typed', {
      strings: ['Frontend Developer', 'Web Developer', 'Software Developer'],
      typeSpeed: 90,
      backSpeed: 30,
      backDelay: 2000,
      cursorChar: '|',
      autoInsertCss: true,
      loop: true,
    });
  }
}
