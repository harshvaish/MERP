import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentManagementSystemPage } from './incident-management-system.page';

describe('IncidentManagementSystemPage', () => {
  let component: IncidentManagementSystemPage;
  let fixture: ComponentFixture<IncidentManagementSystemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentManagementSystemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentManagementSystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
