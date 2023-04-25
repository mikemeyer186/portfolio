import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  ngOnInit() {
    AOS.init();
  }
}
