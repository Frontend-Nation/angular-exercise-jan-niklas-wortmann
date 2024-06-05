import {patchState, signalStore, withHooks, withState} from '@ngrx/signals';
import { Contact } from './contact.model';
import {addEntity, withEntities} from "@ngrx/signals/entities";

export const dummy_contact: Contact = {id: "1", company: "Some Company", email: "some@company.com", name: "Some Name", photo: "https://flowbite.com/docs/images/people/profile-picture-3.jpg"}

export const ContactsStore = signalStore(
  { providedIn: 'root' },
  withEntities<Contact>(),
  withHooks({
    onInit(store){
      patchState(store,  addEntity(dummy_contact))
    }
  })
);
