import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconKeysPage } from './icon-keys.page';

describe('IconKeysPage', () => {
  let component: IconKeysPage;
  let fixture: ComponentFixture<IconKeysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconKeysPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconKeysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
