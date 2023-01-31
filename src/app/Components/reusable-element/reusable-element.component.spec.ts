import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableElementComponent } from './reusable-element.component';

describe('ReusableElementComponent', () => {
  let component: ReusableElementComponent;
  let fixture: ComponentFixture<ReusableElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
