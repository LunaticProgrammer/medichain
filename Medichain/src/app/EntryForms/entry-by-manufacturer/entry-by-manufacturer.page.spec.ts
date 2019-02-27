import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryByManufacturerPage } from './entry-by-manufacturer.page';

describe('EntryByManufacturerPage', () => {
  let component: EntryByManufacturerPage;
  let fixture: ComponentFixture<EntryByManufacturerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryByManufacturerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryByManufacturerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
