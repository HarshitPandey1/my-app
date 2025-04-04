import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersSliderFormComponent } from './offers-slider-form.component';

describe('OffersSliderFormComponent', () => {
  let component: OffersSliderFormComponent;
  let fixture: ComponentFixture<OffersSliderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffersSliderFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersSliderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
