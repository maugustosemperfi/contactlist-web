import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from '@app/prime.module';
import { ContactsFilterComponent } from './components/contacts-filter/contacts-filter.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    PrimeModule,
    ReactiveFormsModule,
    ContactsRoutingModule,
    CommonModule
  ],
  declarations: [ContactsComponent, ContactsFilterComponent, ContactsTableComponent]
})
export class ContactsModule {}
