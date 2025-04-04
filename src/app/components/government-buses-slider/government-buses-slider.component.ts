import { Component, ElementRef, ViewChild } from '@angular/core';
import { GovernmentBusesSliderCardComponent } from './government-buses-slider-card/government-buses-slider-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-government-buses-slider',
  standalone: true,
  imports: [GovernmentBusesSliderCardComponent, CommonModule],
  templateUrl: './government-buses-slider.component.html',
  styleUrls: ['./government-buses-slider.component.css']
})
export class GovernmentBusesSliderComponent {
  @ViewChild('busSlider', { static: false }) busSlider!: ElementRef;

  buses = [
    { name: "BMTC Volvo", route: "Majestic - Electronic City", fare: 120, image: "assets/images/bmtc.jpg" },
    { name: "KSRTC Airavat", route: "Bangalore - Mysore", fare: 320, image: "assets/images/ksrtc.jpg" },
    { name: "HRTC Himachal Roadways", route: "Shimla - Manali", fare: 550, image: "assets/images/hrtc.jpg" },
    { name: "Delhi DTC Bus", route: "New Delhi - Noida", fare: 80, image: "assets/images/dtc.jpg" },
    { name: "Pune PMPML", route: "Pune Station - Hinjewadi", fare: 60, image: "assets/images/pmpml.jpg" }
  ];

  trackBus(index: number, bus: any): string {
    return bus.name;
  }

  /** Scroll Left */
  scrollLeft() {
    if (this.busSlider) {
      this.busSlider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  /** Scroll Right */
  scrollRight() {
    if (this.busSlider) {
      this.busSlider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }
}
