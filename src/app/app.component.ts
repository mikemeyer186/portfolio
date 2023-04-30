import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public service: ServiceService,
    public translate: TranslateService
  ) {}
  title = 'portfolio';
}
