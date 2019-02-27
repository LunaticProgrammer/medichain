import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSubDistPage } from './register-sub-dist.page';

describe('RegisterSubDistPage', () => {
  let component: RegisterSubDistPage;
  let fixture: ComponentFixture<RegisterSubDistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSubDistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSubDistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
