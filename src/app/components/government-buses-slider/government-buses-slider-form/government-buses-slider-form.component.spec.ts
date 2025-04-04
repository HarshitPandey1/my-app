import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentBusesSliderFormComponent } from './government-buses-slider-form.component';

describe('GovernmentBusesSliderFormComponent', () => {
  let component: GovernmentBusesSliderFormComponent;
  let fixture: ComponentFixture<GovernmentBusesSliderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernmentBusesSliderFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentBusesSliderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
