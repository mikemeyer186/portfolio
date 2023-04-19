import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
})
export class MenuMobileComponent {
  constructor(public service: ServiceService) {}

  scrollToTop() {
    window.scrollTo(0, 0);
    this.service.menuIsOpen = false;
    document.body.classList.remove('no-scroll');
  }

  scrollToElement(element: string) {
    const elementToScroll = document.getElementById(element);
    this.service.menuIsOpen = false;
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
