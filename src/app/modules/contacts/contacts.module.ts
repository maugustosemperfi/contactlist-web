import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from '@app/prime.module';
import { ContactsFilterComponent } from './components/contacts-filter/contacts-filter.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';
import { NgxsModule } from '@ngxs/store';
import { ContactsState } from './store/state/contacts.state';

@NgModule({
  imports: [
    NgxsModule.forFeature([ContactsState]),
    FlexLayoutModule,
    PrimeModule,
    ReactiveFormsModule,
    ContactsRoutingModule,
    CommonModule
  ],
  declarations: [ContactsComponent, ContactsFilterComponent, ContactsTableComponent]
})
export class ContactsModule {}
