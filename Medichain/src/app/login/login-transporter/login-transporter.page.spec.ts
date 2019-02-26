import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTransporterPage } from './login-transporter.page';

describe('LoginTransporterPage', () => {
  let component: LoginTransporterPage;
  let fixture: ComponentFixture<LoginTransporterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTransporterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTransporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
