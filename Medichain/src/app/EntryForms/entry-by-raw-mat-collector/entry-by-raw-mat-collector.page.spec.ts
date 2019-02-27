import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryByRawMatCollectorPage } from './entry-by-raw-mat-collector.page';

describe('EntryByRawMatCollectorPage', () => {
  let component: EntryByRawMatCollectorPage;
  let fixture: ComponentFixture<EntryByRawMatCollectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryByRawMatCollectorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryByRawMatCollectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
