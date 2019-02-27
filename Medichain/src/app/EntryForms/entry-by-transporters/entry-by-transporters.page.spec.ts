import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryByTransportersPage } from './entry-by-transporters.page';

describe('EntryByTransportersPage', () => {
  let component: EntryByTransportersPage;
  let fixture: ComponentFixture<EntryByTransportersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryByTransportersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryByTransportersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
