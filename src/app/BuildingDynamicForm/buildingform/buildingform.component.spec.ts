import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingformComponent } from './buildingform.component';

describe('BuildingformComponent', () => {
  let component: BuildingformComponent;
  let fixture: ComponentFixture<BuildingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
