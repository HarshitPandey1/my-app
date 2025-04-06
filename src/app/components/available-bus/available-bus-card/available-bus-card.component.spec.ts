import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBusCardComponent } from './available-bus-card.component';

describe('AvailableBusCardComponent', () => {
  let component: AvailableBusCardComponent;
  let fixture: ComponentFixture<AvailableBusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableBusCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableBusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
