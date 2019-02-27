import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRawMatCollectorPage } from './register-raw-mat-collector.page';

describe('RegisterRawMatCollectorPage', () => {
  let component: RegisterRawMatCollectorPage;
  let fixture: ComponentFixture<RegisterRawMatCollectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterRawMatCollectorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRawMatCollectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
