import { Contact } from '@shared/models/contact.model';

export class AddContact {
  static readonly type = '[Contact Form Page] AddContact]';
  constructor(public readonly payload: Contact) {}
}

export class AddContactSuccessful {
  static readonly type = '[Contact Form API] AddContactSuccessful]';
}

export class AddContactFail {
  static readonly type = '[Contact Form API] AddContactFail]';
}
