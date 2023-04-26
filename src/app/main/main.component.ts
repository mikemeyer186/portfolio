import { Component } from '@angular/core';
import * as AOS from 'aos';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(public service: ServiceService) {}

  ngOnInit() {
    AOS.init();
  }
}
