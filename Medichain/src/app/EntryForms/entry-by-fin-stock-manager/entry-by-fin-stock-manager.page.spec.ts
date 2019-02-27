import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryByFinStockManagerPage } from './entry-by-fin-stock-manager.page';

describe('EntryByFinStockManagerPage', () => {
  let component: EntryByFinStockManagerPage;
  let fixture: ComponentFixture<EntryByFinStockManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryByFinStockManagerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryByFinStockManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
