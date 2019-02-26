import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHospitalPage } from './login-hospital.page';

describe('LoginHospitalPage', () => {
  let component: LoginHospitalPage;
  let fixture: ComponentFixture<LoginHospitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginHospitalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
