import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { PrimeModule } from '@app/prime.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    PrimeModule,
    ContactsRoutingModule,
    CommonModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
