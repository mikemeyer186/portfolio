import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';
import { Subscription } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(public service: ServiceService) {}
  public mailSent: boolean = false;
  public sendAnimation: boolean = false;
  private formSub?: Subscription;
  public contactForm: FormGroup = new FormGroup({
    sender: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    consent: new FormControl(false, [Validators.requiredTrue]),
  });

  ngOnInit() {
    AOS.init();

    // Beim Initialisieren vorhandene Eingaben aus dem Service laden
    const draft = this.service.getContactDraft();
    if (draft) {
      this.contactForm.patchValue(draft);
    }

    // Änderungen live in den Service spiegeln
    this.formSub = this.contactForm.valueChanges.subscribe((value) => {
      this.service.updateContactDraft({
        sender: value.sender ?? '',
        email: value.email ?? '',
        message: value.message ?? '',
        consent: !!value.consent,
      });
    });
  }

  ngOnDestroy() {
    if (this.formSub) {
      this.formSub.unsubscribe();
    }
  }

  async sendMail() {
    this.sendMailAnimation();
    const sender: string = this.contactForm.value.sender;
    const email: string = this.contactForm.value.email;
    const message: string = this.contactForm.value.message;
    const fullMessage = `Akzeptanz der Datenschutzerklärung: ${
      this.contactForm.value.consent ? 'Ja' : 'Nein'
    }\n\n${message}`;
    let formData: FormData = new FormData();
    formData.append('name', sender);
    formData.append('email', email);
    formData.append('message', fullMessage.toString());

    await fetch('https://mike-meyer.dev/send_mail/send_mail.php', {
      method: 'POST',
      body: formData,
    });
  }

  sendMailAnimation() {
    this.sendAnimation = true;

    setTimeout(() => {
      this.mailSent = true;
      this.sendAnimation = false;
      this.service.clearContactDraft();
      this.contactForm.reset();
    }, 2000);
  }
}
