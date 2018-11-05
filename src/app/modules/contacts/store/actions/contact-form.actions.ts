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

export class LoadContact {
  static readonly type = '[Contact Form Page] LoadContact]';
  constructor(public readonly payload: number) {}
}

export class LoadContactSuccessful {
  static readonly type = '[Contact Form API] LoadContactSuccessful]';
  constructor(public readonly payload: Contact) {}
}

export class LoadContactFail {
  static readonly type = '[Contact Form API] LoadContactFail]';
}

export class UpdateContact {
  static readonly type = '[Contact Form Page] UpdateContact]';
  constructor(public readonly payload: Contact) {}
}

export class UpdateContactSuccessful {
  static readonly type = '[Contact Form API] UpdateContactSuccessful]';
}

export class UpdateContactFail {
  static readonly type = '[Contact Form API] UpdateContactFail]';
}
