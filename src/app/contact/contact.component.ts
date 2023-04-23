import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public mailSent: boolean = false;
  public contactForm: FormGroup = new FormGroup({
    sender: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  async sendMail() {
    this.mailSent = true;
    const sender: string = this.contactForm.value.sender;
    const email: string = this.contactForm.value.email;
    const message: string = this.contactForm.value.message;
    let formData: FormData = new FormData();
    formData.append('name', sender);
    formData.append('email', email);
    formData.append('message', message);

    await fetch('https://mike-meyer.dev/send_mail/send_mail.php', {
      method: 'POST',
      body: formData,
    });

    this.contactForm.reset();
  }
}
