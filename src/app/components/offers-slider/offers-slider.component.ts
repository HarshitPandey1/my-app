import { Component } from '@angular/core';
import { OffersSliderCardComponent } from './offers-slider-card/offers-slider-card.component';
import { CommonModule } from '@angular/common';
import { OfferService } from '../../services/offer.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offers-slider',
  imports: [RouterLink,OffersSliderCardComponent,CommonModule],
  templateUrl: './offers-slider.component.html',
  styleUrl: './offers-slider.component.css'
})
export class OffersSliderComponent {
  offers: any[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit() {
    this.loadOffers();
  }

  // Fetch offers from JSON server
  loadOffers() {
    this.offerService.getOffers().subscribe(
      (data) => {
        this.offers = data;
      },
      (error) => {
        console.error('Error fetching offers:', error);
      }
    );
  }

  prevSlide() {
    document.querySelector(".offers-slider")?.scrollBy({ left: -320, behavior: "smooth" });
  }

  nextSlide() {
    document.querySelector(".offers-slider")?.scrollBy({ left: 320, behavior: "smooth" });
  }
}
