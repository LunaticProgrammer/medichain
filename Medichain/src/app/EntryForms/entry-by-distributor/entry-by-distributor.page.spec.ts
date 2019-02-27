import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryByDistributorPage } from './entry-by-distributor.page';

describe('EntryByDistributorPage', () => {
  let component: EntryByDistributorPage;
  let fixture: ComponentFixture<EntryByDistributorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryByDistributorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryByDistributorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
