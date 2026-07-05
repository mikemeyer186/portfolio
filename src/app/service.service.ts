import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
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

  // Reactive UI state — signals so the view always re-renders when these change,
  // independent of change-detection timing.
  menuIsOpen = signal(false);
  currentMenuImage = signal(this.menuImages[0]);
  legalPageIsOpen = signal(false);
  langEnglish = signal(true);
  activeLink = signal('top');

  private menuIconInterval?: ReturnType<typeof setInterval>;

  constructor() {
    // Single source of truth for the background scroll-lock: the page is locked
    // exactly while the mobile menu is open.
    effect(() => {
      const locked = this.menuIsOpen();
      document.documentElement.classList.toggle('no-scroll', locked);
      document.body.classList.toggle('no-scroll', locked);
    });
  }

  openMenu() {
    this.wichIdIsIntoView();
    this.menuIsOpen.set(true);
    this.animateMenuIcon('open');
  }

  closeMenu() {
    if (!this.menuIsOpen()) {
      return;
    }
    this.menuIsOpen.set(false);
    this.animateMenuIcon('close');
  }

  private animateMenuIcon(direction: 'open' | 'close') {
    if (this.menuIconInterval) {
      clearInterval(this.menuIconInterval);
    }
    const last = this.menuImages.length - 1;
    const target = direction === 'open' ? last : 0;
    const step = direction === 'open' ? 1 : -1;
    let i = direction === 'open' ? 0 : last;
    this.currentMenuImage.set(this.menuImages[i]);
    this.menuIconInterval = setInterval(() => {
      if (i === target) {
        clearInterval(this.menuIconInterval);
        this.menuIconInterval = undefined;
        return;
      }
      i += step;
      this.currentMenuImage.set(this.menuImages[i]);
    }, 75);
  }

  scrollToTop() {
    this.legalPageIsOpen.set(false);
    this.activeLink.set('top');
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToElement(element: string) {
    this.legalPageIsOpen.set(false);
    this.activeLink.set(element);
    this.closeMenu();
    setTimeout(() => {
      this.scrollIntoView(document.getElementById(element), 'smooth');
    }, 50);
  }

  openLegalPage() {
    this.legalPageIsOpen.set(true);
    this.activeLink.set('legal');
    this.closeMenu();
    setTimeout(() => {
      this.scrollIntoView(document.getElementById('legal'), 'auto');
    }, 50);
  }

  scrollIntoView(element: HTMLElement | null, behavior: ScrollBehavior) {
    if (element) {
      element.scrollIntoView({
        behavior: behavior,
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  wichIdIsIntoView() {
    for (const id of this.pageElements) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < 100 && rect.bottom > 0) {
          this.activeLink.set(id);
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
