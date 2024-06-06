import {Component, computed, inject, input} from "@angular/core"
import {ContactsStore, dummy_contact} from "../contacts.store";
import {FormsModule, NgForm} from "@angular/forms";
import {Contact} from "../contact.model";
import {Router} from "@angular/router";

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

  private contactStore = inject(ContactsStore);
  private router = inject(Router);
  public id = input.required<string>();

  protected contact = computed(() => {
    return this.contactStore.entityMap()[this.id()];
  })

  onSubmit(form: NgForm) {
    const contact = {...this.contact(), ...form.value} as Contact
    this.contactStore.updateContact(contact);
    this.router.navigate(["/contacts"]);
  }
}
