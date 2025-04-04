import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentBusesSliderCardComponent } from './government-buses-slider-card.component';

describe('GovernmentBusesSliderCardComponent', () => {
  let component: GovernmentBusesSliderCardComponent;
  let fixture: ComponentFixture<GovernmentBusesSliderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernmentBusesSliderCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentBusesSliderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
