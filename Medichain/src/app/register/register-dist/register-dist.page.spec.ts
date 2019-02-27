import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDistPage } from './register-dist.page';

describe('RegisterDistPage', () => {
  let component: RegisterDistPage;
  let fixture: ComponentFixture<RegisterDistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
