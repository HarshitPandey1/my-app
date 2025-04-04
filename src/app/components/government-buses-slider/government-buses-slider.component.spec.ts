import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentBusesSliderComponent } from './government-buses-slider.component';

describe('GovernmentBusesSliderComponent', () => {
  let component: GovernmentBusesSliderComponent;
  let fixture: ComponentFixture<GovernmentBusesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernmentBusesSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentBusesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
