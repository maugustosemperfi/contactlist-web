import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { ContactFormComponent } from './paged-components/contact-form/contact-form.component';

const routes: Routes = [
  { path: '', component: ContactsComponent },
  { path: 'add', component: ContactFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class ContactsRoutingModule {}
