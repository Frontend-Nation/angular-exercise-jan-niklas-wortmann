import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsPageComponent } from './contacts-page.component';

describe('ContactPageComponent', () => {
  let component: ContactsPageComponent;
  let fixture: ComponentFixture<ContactsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
