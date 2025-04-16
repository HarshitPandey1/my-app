import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],  
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isPopupVisible: boolean = false;

  constructor(private el: ElementRef) {}

  // Toggle the visibility of the pop-up menu
  togglePopup(): void {
    console.log('Toggling popup visibility');
    this.isPopupVisible = !this.isPopupVisible;
  }

  // Handle logout functionality (you can implement your own logic)
  logout(): void {
    localStorage.removeItem('userId'); // Remove the stored ID
    localStorage.removeItem('username'); // (Optional) If you're storing more user info
    localStorage.clear(); // Optionally clear all local storage
  }
  

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const clickedInsidePopup = this.el.nativeElement.contains(event.target);
    if (!clickedInsidePopup && this.isPopupVisible) {
      this.isPopupVisible = false;
    }
  }
}
