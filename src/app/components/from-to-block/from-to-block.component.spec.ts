import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromToBlockComponent } from './from-to-block.component';

describe('FromToBlockComponent', () => {
  let component: FromToBlockComponent;
  let fixture: ComponentFixture<FromToBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromToBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromToBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
