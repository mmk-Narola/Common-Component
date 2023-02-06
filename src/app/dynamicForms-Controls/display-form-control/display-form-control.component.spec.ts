import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFormControlComponent } from './display-form-control.component';

describe('DisplayFormControlComponent', () => {
  let component: DisplayFormControlComponent;
  let fixture: ComponentFixture<DisplayFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
