import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentUseComponent } from './different-use.component';

describe('DifferentUseComponent', () => {
  let component: DifferentUseComponent;
  let fixture: ComponentFixture<DifferentUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentUseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferentUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
