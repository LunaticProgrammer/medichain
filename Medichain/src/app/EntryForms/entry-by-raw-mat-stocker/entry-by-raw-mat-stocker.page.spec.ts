import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryByRawMatStockerPage } from './entry-by-raw-mat-stocker.page';

describe('EntryByRawMatStockerPage', () => {
  let component: EntryByRawMatStockerPage;
  let fixture: ComponentFixture<EntryByRawMatStockerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryByRawMatStockerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryByRawMatStockerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
