import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email]),
    message: new FormControl({
     value: null,
     disabled: true
    })
  })

  constructor() {
    this.contactForm.get('name')?.statusChanges.subscribe(status => {
    if(status === 'INVALID') {
      this.contactForm.get('message')?.disable()
    } else {
      this.contactForm.get('message')?.enable()
    }})
  }
  submit() {
    if(this.contactForm.valid) {
      console.log(this.contactForm.value)
    }
  }
}
