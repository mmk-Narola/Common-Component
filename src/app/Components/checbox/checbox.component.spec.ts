import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecboxComponent } from './checbox.component';

describe('ChecboxComponent', () => {
  let component: ChecboxComponent;
  let fixture: ComponentFixture<ChecboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
