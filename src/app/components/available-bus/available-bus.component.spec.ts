import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBusComponent } from './available-bus.component';

describe('AvailableBusComponent', () => {
  let component: AvailableBusComponent;
  let fixture: ComponentFixture<AvailableBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableBusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
