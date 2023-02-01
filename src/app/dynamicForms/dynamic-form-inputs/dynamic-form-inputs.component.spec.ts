import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormInputsComponent } from './dynamic-form-inputs.component';

describe('DynamicFormInputsComponent', () => {
  let component: DynamicFormInputsComponent;
  let fixture: ComponentFixture<DynamicFormInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
