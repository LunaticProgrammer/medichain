import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryByHospitalPage } from './entry-by-hospital.page';

describe('EntryByHospitalPage', () => {
  let component: EntryByHospitalPage;
  let fixture: ComponentFixture<EntryByHospitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryByHospitalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryByHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
