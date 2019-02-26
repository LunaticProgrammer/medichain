import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDistPage } from './login-dist.page';

describe('LoginDistPage', () => {
  let component: LoginDistPage;
  let fixture: ComponentFixture<LoginDistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
