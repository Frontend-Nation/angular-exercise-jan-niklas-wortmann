import {Component } from "@angular/core"
import {dummy_contact} from "../contacts.store";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {

  protected contact = dummy_contact;

}
