import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardPopoverPage } from './wizard-popover.page';

describe('WizardPopoverPage', () => {
  let component: WizardPopoverPage;
  let fixture: ComponentFixture<WizardPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardPopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
