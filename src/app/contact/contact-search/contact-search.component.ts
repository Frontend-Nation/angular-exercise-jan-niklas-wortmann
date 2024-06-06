import {Component, model, output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact-search.component.html',
  styleUrl: './contact-search.component.css'
})
export class ContactSearchComponent {
  protected _search = {query: ""};
  public search = output<string>()

  onSubmit() {
    this.search.emit(this._search.query)
  }
}
