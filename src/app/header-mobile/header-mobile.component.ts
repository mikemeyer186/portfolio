import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent {
  menuImages: string[] = [
    'assets/img/menu/menu_default.png',
    'assets/img/menu/menu_transition.png',
    'assets/img/menu/menu_close_medium.png',
    'assets/img/menu/menu_close.png',
  ];
  currentMenuImage: string = this.menuImages[0];

  constructor(public service: ServiceService) {}

  menuAnimation() {
    if (!this.service.menuIsOpen) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }

  openMenu() {
    let numberOfImage: number = 0;
    const openInterval = setInterval(() => {
      this.currentMenuImage = this.menuImages[numberOfImage];
      numberOfImage++;
      if (numberOfImage === this.menuImages.length) {
        clearInterval(openInterval);
        this.service.menuIsOpen = true;
      }
    }, 75);
  }

  closeMenu() {
    let numberOfImage: number = this.menuImages.length - 1;
    const closeInterval = setInterval(() => {
      this.currentMenuImage = this.menuImages[numberOfImage];
      numberOfImage--;
      if (numberOfImage === -1) {
        clearInterval(closeInterval);
        this.service.menuIsOpen = false;
      }
    }, 75);
  }
}
