import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersSliderComponent } from './offers-slider.component';

describe('OffersSliderComponent', () => {
  let component: OffersSliderComponent;
  let fixture: ComponentFixture<OffersSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffersSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
