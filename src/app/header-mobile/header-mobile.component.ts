import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent {
  constructor(public service: ServiceService) {}

  menuAnimation() {
    if (!this.service.menuIsOpen) {
      this.service.openMenu();
    } else {
      this.service.closeMenu();
    }
  }
}
