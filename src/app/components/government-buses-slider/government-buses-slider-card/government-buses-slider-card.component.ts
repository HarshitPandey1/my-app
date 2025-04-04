import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-government-buses-slider-card',
  imports: [],
  templateUrl: './government-buses-slider-card.component.html',
  styleUrl: './government-buses-slider-card.component.css'
})
export class GovernmentBusesSliderCardComponent {
  @Input() bus: any;
}
