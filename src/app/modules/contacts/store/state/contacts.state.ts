import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Contact } from '@shared/models/contact.model';
import { SearchContacts, SearchContactsSuccessful, SearchContactsFail } from '../actions/contacts.action';

export interface ContactsStateModel {
  contacts: Contact[];
}


@State<ContactsStateModel>({
  name: 'contactsState',
  defaults: {
    contacts: []
  }
})
export class ContactsState {

  @Selector()
  static contacts(state: ContactsStateModel) {
    return state.contacts;
  }

  constructor() {}

  @Action(SearchContacts)
  searchContacts(ctx: StateContext<ContactsStateModel>, action: SearchContacts) {}

  @Action(SearchContactsSuccessful)
  searchContactsSuccessful(ctx: StateContext<ContactsStateModel>) {}

  @Action(SearchContactsFail)
  searchContactsFail(ctx: StateContext<SearchContactsFail>) {}

}
