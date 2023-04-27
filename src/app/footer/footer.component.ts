import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public service: ServiceService) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.classList.remove('no-scroll');
  }
}
