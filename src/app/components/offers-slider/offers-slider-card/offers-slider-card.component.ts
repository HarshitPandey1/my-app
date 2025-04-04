import { DatePipe, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offers-slider-card',
  imports: [DatePipe,JsonPipe],
  templateUrl: './offers-slider-card.component.html',
  styleUrl: './offers-slider-card.component.css'
})
export class OffersSliderCardComponent {
@Input() offer: any;
}
