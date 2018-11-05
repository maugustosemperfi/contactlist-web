import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Contact } from '@shared/models/contact.model';
import { AddContact, AddContactSuccessful, AddContactFail } from '../actions/contact-form.actions';
import { ContactFormService } from '@modules/contacts/services/contact-form.service';

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

  constructor(private service: ContactFormService) {}

  @Action(AddContact)
  addContact(ctx: StateContext<ContactFormStateModel>, action: AddContact) {
    ctx.patchState({
      loading: true
    });
    this.service.addContact(action.payload).subscribe(
      () => ctx.dispatch(new AddContactSuccessful()),
      () => ctx.dispatch(new AddContactFail())
    );
  }

  @Action(AddContactSuccessful)
  addContactSuccessful(ctx: StateContext<ContactFormStateModel>) {
    ctx.patchState({
      loading: false
    });
  }

  @Action(AddContactFail)
  addContactFail(ctx: StateContext<ContactFormStateModel>) {
    ctx.patchState({
      loading: false
    });
  }

}
