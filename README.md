# FrontendNationExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Goal

1. Utilize NgRx SignalStore
2. Define boundaries between Observables and Signals

## Exercise

### Steps

#### Step 1 - Initial Setup

```shell
npm install
```

```shell
npm install @ngrx/signals@18.0.0-beta.1
```

#### Step 2 - Fetch All Contacts

Fetch all Contacts from the MockServer and display them in the `ContactsPage`

#### Step 3 - Update an Existing Contact

In the `ContactDetailPage` implement updating an existing Contact and make sure that the `ContactsPage` shows the updated contact.

#### Step 4 - Create a new Contact

Use `AddContactPage` to create an entire new user and make sure that the `ContactsPage` shows the new contact. 

#### Bonus - Implement Search

Implement a search functionality for contacts in the `ContactsPage`

## Helpful Information

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Mock API

Run `npm run serve-server` to start a mock API. `http://localhost:3000/contacts` will return a list of plenty of contacts. `ContactDataService` implements methods to interact with the API. 
