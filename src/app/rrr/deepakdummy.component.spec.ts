import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepakdummyComponent } from './deepakdummy.component';

describe('DeepakdummyComponent', () => {
  let component: DeepakdummyComponent;
  let fixture: ComponentFixture<DeepakdummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepakdummyComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepakdummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
