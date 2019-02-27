import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRawMatStockPage } from './register-raw-mat-stock.page';

describe('RegisterRawMatStockPage', () => {
  let component: RegisterRawMatStockPage;
  let fixture: ComponentFixture<RegisterRawMatStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterRawMatStockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRawMatStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
