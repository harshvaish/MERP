import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveShooterPage } from './active-shooter.page';

describe('ActiveShooterPage', () => {
  let component: ActiveShooterPage;
  let fixture: ComponentFixture<ActiveShooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveShooterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveShooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
