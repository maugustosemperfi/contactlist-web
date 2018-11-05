import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Contact } from '@shared/models/contact.model';
import { SearchContacts, SearchContactsSuccessful, SearchContactsFail } from '../actions/contacts.action';
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
  searchContacts(ctx: StateContext<ContactsStateModel>, action: SearchContacts) {
    ctx.patchState({
      loading: true
    });

    this.service.getAll().subscribe(
      (contacts) => {
        const modelledContacts = contacts as Contact[];
        ctx.dispatch(new SearchContactsSuccessful(modelledContacts));
      },
      (err) => ctx.dispatch(new SearchContactsFail())
    );
  }

  @Action(SearchContactsSuccessful)
  searchContactsSuccessful(ctx: StateContext<ContactsStateModel>, action: SearchContactsSuccessful) {
    ctx.patchState({
      contacts: action.payload,
      loading: false
    });
  }

  @Action(SearchContactsFail)
  searchContactsFail(ctx: StateContext<SearchContactsFail>) {
    ctx.patchState({
      loading: false
    });
  }

}
