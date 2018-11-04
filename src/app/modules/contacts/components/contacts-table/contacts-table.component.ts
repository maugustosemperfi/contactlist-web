import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '@shared/models/contact.model';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {

  @Input() contacts: Contact[];

  constructor() { }

  ngOnInit() {
  }

}
