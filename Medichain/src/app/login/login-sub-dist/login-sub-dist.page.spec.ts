import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSubDistPage } from './login-sub-dist.page';

describe('LoginSubDistPage', () => {
  let component: LoginSubDistPage;
  let fixture: ComponentFixture<LoginSubDistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSubDistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSubDistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
