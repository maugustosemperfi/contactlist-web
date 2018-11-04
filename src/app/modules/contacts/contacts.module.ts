import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { PrimeModule } from '@app/prime.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsFilterComponent } from './contacts-filter/contacts-filter.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    PrimeModule,
    ContactsRoutingModule,
    CommonModule
  ],
  declarations: [ContactsComponent, ContactsFilterComponent]
})
export class ContactsModule { }
