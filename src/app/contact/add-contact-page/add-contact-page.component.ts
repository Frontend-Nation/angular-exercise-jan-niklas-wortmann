import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Contact} from "../contact.model";

@Component({
  selector: 'app-add-contact-page',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './add-contact-page.component.html',
  styleUrl: './add-contact-page.component.css'
})
export class AddContactPageComponent {
  protected contact: Partial<Contact> = {name: "", email: "", company: ""}
}
