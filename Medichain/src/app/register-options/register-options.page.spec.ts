import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOptionsPage } from './register-options.page';

describe('RegisterOptionsPage', () => {
  let component: RegisterOptionsPage;
  let fixture: ComponentFixture<RegisterOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterOptionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
