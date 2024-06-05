import {Component, inject} from '@angular/core';
import {ContactSearchComponent} from "../contact-search/contact-search.component";
import {ContactsStore} from "../contacts.store";
import {ContactCardComponent} from "../contact-card/contact-card.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    ContactSearchComponent,
    ContactCardComponent,
    RouterLink
  ],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.css'
})
export class ContactsPageComponent {
  protected contactStore = inject(ContactsStore);

}
