import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchContacts } from '@modules/contacts/store/actions/contacts.action';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'app-contacts-filter',
  templateUrl: './contacts-filter.component.html',
  styleUrls: ['./contacts-filter.component.css']
})
export class ContactsFilterComponent implements OnInit {

  filterForm: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) { }

  ngOnInit() {
    this.generateFilterForm();
  }

  search() {
    this.store.dispatch(new SearchContacts(this.filterForm.value));
  }

  addContact() {
    this.store.dispatch(new Navigate(['/contacts/add']));
  }

  private generateFilterForm() {
    this.filterForm = this.fb.group({
      name: ['', []],
      cpf: ['', []]
    });
  }

}
