import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHospitalPage } from './register-hospital.page';

describe('RegisterHospitalPage', () => {
  let component: RegisterHospitalPage;
  let fixture: ComponentFixture<RegisterHospitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterHospitalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
