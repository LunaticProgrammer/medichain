import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryByPharmaPage } from './entry-by-pharma.page';

describe('EntryByPharmaPage', () => {
  let component: EntryByPharmaPage;
  let fixture: ComponentFixture<EntryByPharmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryByPharmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryByPharmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
