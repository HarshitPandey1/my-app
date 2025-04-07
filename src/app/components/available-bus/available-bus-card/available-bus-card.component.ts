import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-available-bus-card',
  imports: [CommonModule],
  templateUrl: './available-bus-card.component.html',
  styleUrl: './available-bus-card.component.css'
})
export class AvailableBusCardComponent {
  @Input() bus: any;
  @Input() expanded: boolean = false;
}
