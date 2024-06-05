import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ContactsPageComponent} from "./contact/contact-page/contacts-page.component";
import {ContactDetailComponent} from "./contact/contact-detail/contact-detail.component";
import {AddContactPageComponent} from "./contact/add-contact-page/add-contact-page.component";

export const routes: Routes = [
  {path: 'contacts', component: ContactsPageComponent},
  {path: 'contacts/new', component: AddContactPageComponent},
  {path: 'contacts/:id', component: ContactDetailComponent},
  {path: '', redirectTo: "contacts", pathMatch: "full"},
];
