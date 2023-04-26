import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  constructor(public service: ServiceService) {}
}
