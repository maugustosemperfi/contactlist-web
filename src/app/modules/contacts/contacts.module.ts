import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from '@app/prime.module';
import { NgxsModule } from '@ngxs/store';
import { ContactsFilterComponent } from './components/contacts-filter/contacts-filter.component';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactFormComponent } from './paged-components/contact-form/contact-form.component';
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
  declarations: [
    ContactsComponent,
    ContactsFilterComponent,
    ContactsTableComponent,
    ContactFormComponent
  ]
})
export class ContactsModule {}
