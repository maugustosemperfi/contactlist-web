import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, Form } from '@angular/forms';
import { Phone } from '@shared/models/phone.model';
import { Contact } from '@shared/models/contact.model';
import { Store } from '@ngxs/store';
import { AddContact } from '@modules/contacts/store/actions/contact-form.actions';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  phoneForm: FormGroup;

  phones: Phone[] = [];

  id: string;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.generateContactForm();
    this.generatePhoneForm();
  }

  addPhone() {
    this.phones.push(this.phoneForm.value);
    this.phoneForm.reset();
  }

  create() {
    const contact: Contact = this.contactForm.value;
    contact.phones = this.phones;
    contact.birthday = new Date();
    this.store.dispatch(new AddContact(contact));
  }

  private generateContactForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', [Validators.required]],
      phones: this.fb.array([])
    });
  }

  private generatePhoneForm() {
    this.phoneForm = this.fb.group({
      ddd: ['', Validators.required],
      number: ['', Validators.required]
    });
  }
}
