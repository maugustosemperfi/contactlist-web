import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Phone } from '@shared/models/phone.model';
import { Contact } from '@shared/models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  phoneForm: FormGroup;

  id: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.generateContactForm();
    this.generatePhoneForm();
  }

  addPhone() {
    this.phoneForm.reset();
  }

  private generateContactForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', [Validators.required]]
    });
  }

  private generatePhoneForm() {
    this.phoneForm = this.fb.group({
      ddd: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
}
