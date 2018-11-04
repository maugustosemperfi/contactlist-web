import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  imports: [
    ContactsRoutingModule,
    CommonModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
