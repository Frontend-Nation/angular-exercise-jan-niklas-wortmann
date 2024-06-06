import {patchState, signalStore, withHooks, withMethods, withState} from '@ngrx/signals';
import { Contact } from './contact.model';
import {addEntities, addEntity, updateEntity, withEntities} from "@ngrx/signals/entities";
import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, concatMap, exhaustMap, Observable, of, pipe, tap} from "rxjs";
import {rxMethod} from "@ngrx/signals/rxjs-interop";

export const dummy_contact: Contact = {id: "1", company: "Some Company", email: "some@company.com", name: "Some Name", photo: "https://flowbite.com/docs/images/people/profile-picture-3.jpg"}

export const ContactsStore = signalStore(
  { providedIn: 'root' },
  withEntities<Contact>(),
  withMethods((store) => {
    const dataService = inject(ContactDataService)
    return {
      loadAllContacts: rxMethod<void>(
        pipe(
          exhaustMap(_ => dataService.getContacts()),
          tap(contacts => {
            patchState(store, addEntities(contacts))
          })
        )
      ),
      updateContact: rxMethod<Contact>(
        pipe(
          concatMap(contact => dataService.updateContact(contact)),
          tap(contact => {
            patchState(store, updateEntity({id: contact.id, changes: contact}))
          })
        )
      ),
      createContact: rxMethod<Pick<Contact, "name" | "company" | "email">>(
        pipe(
          exhaustMap(contact => dataService.createContact(contact)),
          tap(contact => {
            if(contact){
              patchState(store, addEntity(contact))
            }
          })
        )
      )
    }
  }),
  withHooks({
    onInit(store){
      store.loadAllContacts();
    }
  })
);

@Injectable({providedIn: "root"})
export class ContactDataService {

  private http = inject(HttpClient);

  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>("http://localhost:3000/contacts").pipe(
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    )
  }

  public createContact(_contact: Pick<Contact, "name" | "company" | "email">): Observable<Contact | undefined> {
    const contact = {
      "age": 23,
      "gender": "male",
      "photo": "https://randomuser.me/api/portraits/men/50.jpg",
      ..._contact
    };
    return this.http.post<Contact>("http://localhost:3000/contacts", contact).pipe(
      catchError((error) => {
        console.error(error);
        return of(undefined);
      })
    )
  }

  public updateContact(contact: Contact): Observable<Contact> {
    return this.http.patch<Contact>("http://localhost:3000/contacts/"+contact.id, contact).pipe(
      catchError((error) => {
        console.error(error);
        return of(contact);
      })
    )
  }
}
