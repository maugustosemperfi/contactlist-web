import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ContactsState } from './store/state/contacts.state';
import { Observable } from 'rxjs';
import { Contact } from '@shared/models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @Select(ContactsState.contacts)
  contacts$: Observable<Contact[]>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

}
