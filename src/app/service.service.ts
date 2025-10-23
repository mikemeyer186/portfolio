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
  pageElements: string[] = [
    'top',
    'about',
    'skills',
    'portfolio',
    'contact',
    'legal',
  ];
  contactDraft: {
    sender: string;
    email: string;
    message: string;
    consent: boolean;
  } = {
    sender: '',
    email: '',
    message: '',
    consent: false,
  };
  currentMenuImage: string = this.menuImages[0];
  legalPageIsOpen: boolean = false;
  langEnglish: boolean = true;

  constructor() {}

  openMenu() {
    this.wichIdIsIntoView();
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
    this.legalPageIsOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.closeMenu();
    document.body.classList.remove('no-scroll');
  }

  scrollToElement(element: string) {
    this.legalPageIsOpen = false;
    this.setLegalOpacity();
    this.setActiveLink(element);

    setTimeout(() => {
      this.smoothScrollAnimation(element);
    }, 50);
  }

  setActiveLink(element: string) {
    this.removeActiveLink();
    const menuLink = document.getElementById(element + '-link');
    if (menuLink) {
      menuLink.classList.add('activeLink');
    }
  }

  removeActiveLink() {
    const menuLinks = document.getElementsByClassName('menu-link');
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].classList.remove('activeLink');
    }
  }

  smoothScrollAnimation(element: string) {
    const elementToScroll = document.getElementById(element);
    document.body.classList.remove('no-scroll');
    this.closeMenu();
    this.scrollIntoView(elementToScroll, 'smooth');
  }

  scrollIntoView(element: any, behavior: string) {
    if (element) {
      element.scrollIntoView({
        behavior: behavior,
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  openLegalPage() {
    this.legalPageIsOpen = true;
    this.setActiveLink('legal');
    setTimeout(() => {
      this.setLegalOpacity();
      this.scrollToLegalTop();
    }, 50);
  }

  scrollToLegalTop() {
    const legalElement = document.getElementById('legal');
    document.body.classList.remove('no-scroll');
    this.closeMenu();
    this.scrollIntoView(legalElement, 'auto');
  }

  setLegalOpacity() {
    const legalPage: HTMLElement | null = document.getElementById('legal-page');
    const portfolioPage: HTMLElement | null =
      document.getElementById('portfolio-page');

    if (this.legalPageIsOpen && legalPage && portfolioPage) {
      legalPage.classList.remove('opacity-0');
      portfolioPage.classList.add('opacity-0');
    } else if (!this.legalPageIsOpen && legalPage && portfolioPage) {
      legalPage.classList.add('opacity-0');
      portfolioPage.classList.remove('opacity-0');
    }
  }

  wichIdIsIntoView() {
    for (let i = 0; i < this.pageElements.length; i++) {
      const element: HTMLElement | null = document.getElementById(
        this.pageElements[i]
      );
      if (element) {
        const elementIsIntoView: boolean =
          element.getBoundingClientRect().top < 100 &&
          element.getBoundingClientRect().bottom > 0;
        if (elementIsIntoView) {
          this.setActiveLink(this.pageElements[i]);
        }
      }
    }
  }

  getContactDraft() {
    return this.contactDraft;
  }

  updateContactDraft(
    patch: Partial<{
      sender: string;
      email: string;
      message: string;
      consent: boolean;
    }>
  ) {
    this.contactDraft = { ...this.contactDraft, ...patch };
  }

  clearContactDraft() {
    this.contactDraft = { sender: '', email: '', message: '', consent: false };
  }
}
