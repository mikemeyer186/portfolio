import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  menuIsOpen: boolean = false;
  menuImages: string[] = [
    'assets/img/menu/menu_default.png',
    'assets/img/menu/menu_transition.png',
    'assets/img/menu/menu_close_medium.png',
    'assets/img/menu/menu_close.png',
  ];
  currentMenuImage: string = this.menuImages[0];

  constructor() {}

  menuAnimation() {
    if (!this.menuIsOpen) {
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
        this.menuIsOpen = true;
        document.body.classList.add('no-scroll');
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
        this.menuIsOpen = false;
        document.body.classList.remove('no-scroll');
      }
    }, 75);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
    this.closeMenu();
    document.body.classList.remove('no-scroll');
  }

  scrollToElement(element: string) {
    const elementToScroll = document.getElementById(element);
    this.closeMenu();
    document.body.classList.remove('no-scroll');

    if (elementToScroll) {
      elementToScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}
