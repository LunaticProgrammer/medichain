import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPharmaPage } from './register-pharma.page';

describe('RegisterPharmaPage', () => {
  let component: RegisterPharmaPage;
  let fixture: ComponentFixture<RegisterPharmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPharmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPharmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
