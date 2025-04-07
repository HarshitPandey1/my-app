import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FromToBlockComponent } from '../from-to-block/from-to-block.component';
import { OffersSliderComponent } from '../offers-slider/offers-slider.component';
import { GovernmentBusesSliderComponent } from '../government-buses-slider/government-buses-slider.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink,HeaderComponent,FromToBlockComponent,OffersSliderComponent,GovernmentBusesSliderComponent,FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
