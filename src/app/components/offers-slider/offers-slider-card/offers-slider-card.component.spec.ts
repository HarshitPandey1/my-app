import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersSliderCardComponent } from './offers-slider-card.component';

describe('OffersSliderCardComponent', () => {
  let component: OffersSliderCardComponent;
  let fixture: ComponentFixture<OffersSliderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffersSliderCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersSliderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
