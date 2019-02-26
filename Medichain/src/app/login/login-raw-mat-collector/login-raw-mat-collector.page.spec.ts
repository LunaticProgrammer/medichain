import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRawMatCollectorPage } from './login-raw-mat-collector.page';

describe('LoginRawMatCollectorPage', () => {
  let component: LoginRawMatCollectorPage;
  let fixture: ComponentFixture<LoginRawMatCollectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRawMatCollectorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRawMatCollectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
