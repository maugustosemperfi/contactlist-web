import { ContactsForm } from '@modules/contacts/models/contacts-form.model';

export class SearchContacts {
  static readonly type = '[Contacts Page] SearchContacts]';
  constructor(public readonly payload: ContactsForm) {}
}

export class SearchContactsSuccessful {
  static readonly type = '[Contacts API] SearchContactsSuccessful]';
}

export class SearchContactsFail {
  static readonly type = '[Contacts API] SearchContactsFail]';
}

