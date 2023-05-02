import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent {
  constructor(
    public service: ServiceService,
    public translate: TranslateService
  ) {}

  menuAnimation() {
    if (!this.service.menuIsOpen) {
      this.service.openMenu();
    } else {
      this.service.closeMenu();
    }
  }

  changeLanguage(lang: string) {
    if (lang == 'en') {
      this.service.langEnglish = true;
    } else {
      this.service.langEnglish = false;
    }
    this.translate.use(lang);
  }
}
