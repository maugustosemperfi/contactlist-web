import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from '@app/prime.module';
import { ContactsFilterComponent } from './contacts-filter/contacts-filter.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    PrimeModule,
    ReactiveFormsModule,
    ContactsRoutingModule,
    CommonModule
  ],
  declarations: [ContactsComponent, ContactsFilterComponent]
})
export class ContactsModule {}
