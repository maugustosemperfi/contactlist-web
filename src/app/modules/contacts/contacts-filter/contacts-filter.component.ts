import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchContacts } from '../store/actions/contacts.action';

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

  private generateFilterForm() {
    this.filterForm = this.fb.group({
      name: ['', []],
      cpf: ['', []]
    });
  }

}
