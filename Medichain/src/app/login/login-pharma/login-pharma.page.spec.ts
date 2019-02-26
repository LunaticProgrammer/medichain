import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPharmaPage } from './login-pharma.page';

describe('LoginPharmaPage', () => {
  let component: LoginPharmaPage;
  let fixture: ComponentFixture<LoginPharmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPharmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPharmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
