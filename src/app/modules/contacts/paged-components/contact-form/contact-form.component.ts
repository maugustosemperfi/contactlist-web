import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  Form
} from '@angular/forms';
import { Phone } from '@shared/models/phone.model';
import { Contact } from '@shared/models/contact.model';
import { Store } from '@ngxs/store';
import {
  AddContact,
  LoadContact,
  UpdateContact
} from '@modules/contacts/store/actions/contact-form.actions';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactFormState } from '@modules/contacts/store/state/contact-form.state';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {
  contactSubscription: Subscription;

  contactForm: FormGroup;
  phoneForm: FormGroup;

  phones: Phone[] = [];

  id: number;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.generateContactForm();
    this.generatePhoneForm();
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.id) {
      this.store.dispatch(new LoadContact(this.id));
      this.contactSubscription = this.store
        .select(ContactFormState.contact)
        .subscribe(contact => {
          if (contact) {
            this.contactForm.patchValue(contact);
            this.phones = contact.phones;
          }
        });
    }
  }

  addPhone() {
    this.phones.push(this.phoneForm.value);
    this.phoneForm.reset();
  }

  create() {
    const contact: Contact = this.contactForm.value;
    contact.phones = this.phones;
    this.store.dispatch(new AddContact(contact));
  }

  update() {
    const contact: Contact = this.contactForm.value;
    contact.phones = this.phones;
    this.store.dispatch(new UpdateContact(contact));
  }

  private generateContactForm() {
    this.contactForm = this.fb.group({
      id: [''],
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

  ngOnDestroy() {
    this.contactSubscription.unsubscribe();
  }
}
