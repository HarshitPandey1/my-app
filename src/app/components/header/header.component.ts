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
    console.log("Logging out...");
    // Implement actual logout logic (e.g., clear session, token, etc.)
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const clickedInsidePopup = this.el.nativeElement.contains(event.target);
    if (!clickedInsidePopup && this.isPopupVisible) {
      this.isPopupVisible = false;
    }
  }
}
