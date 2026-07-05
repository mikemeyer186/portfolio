import { Component } from '@angular/core';
import * as AOS from 'aos';
import { ServiceService } from '../service.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(public service: ServiceService) {}

  ngOnInit() {
    AOS.init();
    const typed = new Typed('#typed', {
      strings: [
        'Software Developer',
        'DevOps Specialist',
        'IT-Security Expert',
        'AI & Tech Enthusiast',
        'Data Engineer',
      ],
      typeSpeed: 90,
      backSpeed: 30,
      backDelay: 2000,
      cursorChar: '|',
      autoInsertCss: true,
      contentType: 'null',
      loop: true,
    });
  }
}
