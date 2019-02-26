import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRawMatStockPage } from './login-raw-mat-stock.page';

describe('LoginRawMatStockPage', () => {
  let component: LoginRawMatStockPage;
  let fixture: ComponentFixture<LoginRawMatStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRawMatStockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRawMatStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
