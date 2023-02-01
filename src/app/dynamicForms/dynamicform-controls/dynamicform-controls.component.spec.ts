import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicformControlsComponent } from './dynamicform-controls.component';

describe('DynamicformControlsComponent', () => {
  let component: DynamicformControlsComponent;
  let fixture: ComponentFixture<DynamicformControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicformControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicformControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
