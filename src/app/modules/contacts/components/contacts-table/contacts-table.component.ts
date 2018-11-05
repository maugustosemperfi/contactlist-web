import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '@shared/models/contact.model';
import { Store } from '@ngxs/store';
import { DeleteContact } from '@modules/contacts/store/actions/contacts.action';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {

  @Input() contacts: Contact[];

  constructor(private store: Store) { }

  ngOnInit() {
  }

  deleteContact(contact: Contact) {
    this.store.dispatch(new DeleteContact(contact));
  }

}
