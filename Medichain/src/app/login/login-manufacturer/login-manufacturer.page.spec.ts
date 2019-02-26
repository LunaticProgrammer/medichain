import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginManufacturerPage } from './login-manufacturer.page';

describe('LoginManufacturerPage', () => {
  let component: LoginManufacturerPage;
  let fixture: ComponentFixture<LoginManufacturerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginManufacturerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginManufacturerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
