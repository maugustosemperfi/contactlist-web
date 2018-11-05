import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Contact } from '@shared/models/contact.model';
import {
  SearchContacts,
  SearchContactsSuccessful,
  SearchContactsFail,
  DeleteContact,
  DeleteContactSuccessful,
  DeleteContactFail
} from '../actions/contacts.action';
import { ContactService } from '@modules/contacts/services/contact.service';

export interface ContactsStateModel {
  contacts: Contact[];
  loading: boolean;
}

@State<ContactsStateModel>({
  name: 'contactsState',
  defaults: {
    contacts: [],
    loading: false
  }
})
export class ContactsState {
  @Selector()
  static contacts(state: ContactsStateModel) {
    return state.contacts;
  }

  constructor(private service: ContactService) {}

  @Action(SearchContacts)
  searchContacts(
    ctx: StateContext<ContactsStateModel>,
    action: SearchContacts
  ) {
    ctx.patchState({
      loading: true
    });

    this.service.getAll().subscribe(
      contacts => {
        const modelledContacts = contacts as Contact[];
        ctx.dispatch(new SearchContactsSuccessful(modelledContacts));
      },
      err => ctx.dispatch(new SearchContactsFail())
    );
  }

  @Action(SearchContactsSuccessful)
  searchContactsSuccessful(
    ctx: StateContext<ContactsStateModel>,
    action: SearchContactsSuccessful
  ) {
    ctx.patchState({
      contacts: action.payload,
      loading: false
    });
  }

  @Action(SearchContactsFail)
  searchContactsFail(ctx: StateContext<ContactsStateModel>) {
    ctx.patchState({
      loading: false
    });
  }

  @Action(DeleteContact)
  deleteContact(ctx: StateContext<ContactsStateModel>, action: DeleteContact) {
    this.service
      .deleteContact(action.payload.id)
      .subscribe(
        () => ctx.dispatch(new DeleteContactSuccessful(action.payload)),
        () => ctx.dispatch(new DeleteContactFail())
      );
  }

  @Action(DeleteContactSuccessful)
  deleteContactSuccessful(
    ctx: StateContext<ContactsStateModel>,
    action: DeleteContactSuccessful
  ) {
    let contacts = ctx.getState().contacts;
    contacts = contacts.filter(contact => {
      return contact.id !== action.payload.id;
    });
    ctx.patchState({
      contacts: contacts
    });
  }
}
