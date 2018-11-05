import { ContactsForm } from '@modules/contacts/models/contacts-form.model';
import { Contact } from '@shared/models/contact.model';

export class SearchContacts {
  static readonly type = '[Contacts Page] SearchContacts]';
  constructor(public readonly payload: ContactsForm) {}
}

export class SearchContactsSuccessful {
  static readonly type = '[Contacts API] SearchContactsSuccessful]';
  constructor(public readonly payload: Contact[]) {}
}

export class SearchContactsFail {
  static readonly type = '[Contacts API] SearchContactsFail]';
}

export class DeleteContact {
  static readonly type = '[Contacts Page] DeleteContact]';
  constructor(public readonly payload: Contact) {}
}

export class DeleteContactSuccessful {
  static readonly type = '[Contacts API] DeleteContactSuccessful]';
  constructor(public readonly payload: Contact) {}
}

export class DeleteContactFail {
  static readonly type = '[Contacts API] DeleteContactFail]';
}
