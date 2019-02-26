import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFinStockManagerPage } from './login-fin-stock-manager.page';

describe('LoginFinStockManagerPage', () => {
  let component: LoginFinStockManagerPage;
  let fixture: ComponentFixture<LoginFinStockManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFinStockManagerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFinStockManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
