import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Contact } from '@shared/models/contact.model';
import { AddContact, AddContactSuccessful, AddContactFail } from '../actions/contact-form.actions';

export interface ContactFormStateModel {
  contact: Contact;
  loading: boolean;
}


@State<ContactFormStateModel>({
  name: 'contactFormState',
  defaults: {
    contact: null,
    loading: false
  }
})
export class ContactFormState {

  @Selector()
  static contact(state: ContactFormStateModel) {
    return state.contact;
  }

  constructor() {}

  @Action(AddContact)
  addContact(ctx: StateContext<ContactFormStateModel>, action: AddContact) {}

  @Action(AddContactSuccessful)
  addContactSuccessful(ctx: StateContext<ContactFormStateModel>) {}

  @Action(AddContactFail)
  addContactFail(ctx: StateContext<ContactFormStateModel>) {}

}
