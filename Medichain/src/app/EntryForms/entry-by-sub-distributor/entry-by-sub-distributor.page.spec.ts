import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryBySubDistributorPage } from './entry-by-sub-distributor.page';

describe('EntryBySubDistributorPage', () => {
  let component: EntryBySubDistributorPage;
  let fixture: ComponentFixture<EntryBySubDistributorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryBySubDistributorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryBySubDistributorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
