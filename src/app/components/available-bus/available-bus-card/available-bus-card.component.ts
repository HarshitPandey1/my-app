import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-available-bus-card',
  imports: [],
  templateUrl: './available-bus-card.component.html',
  styleUrl: './available-bus-card.component.css'
})
export class AvailableBusCardComponent {
  @Input() bus: any;
}
