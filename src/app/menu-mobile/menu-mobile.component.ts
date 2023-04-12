import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
})
export class MenuMobileComponent {
  constructor(public service: ServiceService) {}
}
