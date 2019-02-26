import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRawMatPage } from './login-raw-mat.page';

describe('LoginRawMatPage', () => {
  let component: LoginRawMatPage;
  let fixture: ComponentFixture<LoginRawMatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRawMatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRawMatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
