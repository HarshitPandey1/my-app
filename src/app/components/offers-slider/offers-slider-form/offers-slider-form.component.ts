import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { OfferService } from '../../../services/offer.service';

@Component({
  selector: 'app-offers-slider-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './offers-slider-form.component.html',
  styleUrl: './offers-slider-form.component.css'
})
export class OffersSliderFormComponent {
  offerForm: FormGroup;

  constructor(private fb: FormBuilder,private offerService: OfferService  ) {
    this.offerForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      validTill: ['', Validators.required]
    });
  }

  submitOffer() {
    if (this.offerForm.valid) {
      this.offerService.addOffer(this.offerForm.value).subscribe({
        next: (response) => {
          console.log('Offer saved successfully:', response);
          alert('Offer submitted successfully!');
          this.offerForm.reset();
        },
        error: (error) => {
          console.error('Error saving offer:', error);
          alert('Failed to submit offer.');
        }
      });
    }
  }
}
