import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Contact } from '@shared/models/contact.model';
import { AddContact, AddContactSuccessful, AddContactFail, LoadContact, LoadContactSuccessful, LoadContactFail, UpdateContact, UpdateContactSuccessful, UpdateContactFail } from '../actions/contact-form.actions';
import { ContactFormService } from '@modules/contacts/services/contact-form.service';
import { Navigate } from '@ngxs/router-plugin';

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

    ctx.dispatch(new Navigate(['/contacts']));
  }

  @Action(AddContactFail)
  addContactFail(ctx: StateContext<ContactFormStateModel>) {
    ctx.patchState({
      loading: false
    });
  }

  @Action(LoadContact)
  loadContact(ctx: StateContext<ContactFormStateModel>, action: LoadContact) {
    this.service.loadContact(action.payload)
      .subscribe(
        (contact) => {
          const contactModeled = contact as Contact;
          ctx.dispatch(new LoadContactSuccessful(contactModeled));
        },
        (err) => ctx.dispatch(new LoadContactFail())
      );
  }

  @Action(LoadContactSuccessful)
  loadContactSuccessful(ctx: StateContext<ContactFormStateModel>, action: LoadContactSuccessful) {
    ctx.patchState({
      contact: action.payload
    });
  }

  @Action(UpdateContact)
  updateContact(ctx: StateContext<ContactFormStateModel>, action: UpdateContact) {
    this.service.updateContact(action.payload.id, action.payload)
      .subscribe(
        (contact) => ctx.dispatch(new UpdateContactSuccessful()),
        (err) => ctx.dispatch(new UpdateContactFail())
      );
  }

}
