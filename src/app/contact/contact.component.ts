import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(public service: ServiceService) {}
  public mailSent: boolean = false;
  public sendAnimation: boolean = false;
  public contactForm: FormGroup = new FormGroup({
    sender: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  ngOnInit() {
    AOS.init();
  }

  async sendMail() {
    this.sendMailAnimation();
    const sender: string = this.contactForm.value.sender;
    const email: string = this.contactForm.value.email;
    const message: string = this.contactForm.value.message;
    let formData: FormData = new FormData();
    formData.append('name', sender);
    formData.append('email', email);
    formData.append('message', message.toString());

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
      this.contactForm.reset();
    }, 2000);
  }
}
