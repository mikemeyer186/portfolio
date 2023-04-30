import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
})
export class MenuMobileComponent {
  constructor(
    public service: ServiceService,
    public translate: TranslateService
  ) {}

  changeLanguage(lang: string) {
    if (lang == 'en') {
      this.service.langEnglish = true;
    } else {
      this.service.langEnglish = false;
    }
    this.translate.use(lang);
  }
}
