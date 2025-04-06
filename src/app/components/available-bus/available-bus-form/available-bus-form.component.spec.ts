import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBusFormComponent } from './available-bus-form.component';

describe('AvailableBusFormComponent', () => {
  let component: AvailableBusFormComponent;
  let fixture: ComponentFixture<AvailableBusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableBusFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableBusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
