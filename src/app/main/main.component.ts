import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  bgHeight: number = 120;
  bgInterval: any;

  constructor(public service: ServiceService) {}

  ngOnInit() {
    AOS.init();
    this.backgroundAnimation();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.backgroundAnimation();
  }

  isDesktop() {
    return window.innerWidth > 767;
  }

  isMobile() {
    return window.innerWidth < 767;
  }

  backgroundAnimation() {
    const backgroundImage: HTMLElement | null =
      document.getElementById('main-blue-bg');
    clearInterval(this.bgInterval);

    if (this.isDesktop() && backgroundImage) {
      this.changesStyleOfImage(backgroundImage);
    } else if (this.isMobile() && backgroundImage) {
      backgroundImage.style.height = '120%';
    }
  }

  changesStyleOfImage(backgroundImage: HTMLElement) {
    this.bgHeight = 120;
    this.bgInterval = setInterval(() => {
      if (this.bgHeight < 1800) {
        this.bgHeight++;
        backgroundImage.style.height = this.bgHeight + 'px';
      }
    }, 1000 / 120);
  }
}
