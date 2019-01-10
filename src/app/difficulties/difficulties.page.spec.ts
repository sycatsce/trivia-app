import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultiesPage } from './difficulties.page';

describe('DifficultiesPage', () => {
  let component: DifficultiesPage;
  let fixture: ComponentFixture<DifficultiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
