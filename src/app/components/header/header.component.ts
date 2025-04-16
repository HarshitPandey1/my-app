import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],  
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isPopupVisible: boolean = false;
  profilePhotoUrl: string | null = null;

  constructor(private el: ElementRef,private http: HttpClient) {}

  // Toggle the visibility of the pop-up menu
  togglePopup(): void {
    console.log('Toggling popup visibility');
    this.isPopupVisible = !this.isPopupVisible;
  }
  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if (userId) {
      this.http.get<any[]>(`http://localhost:3002/profile?userId=${userId}`).subscribe(profiles => {
        if (profiles.length && profiles[0].photoUrl?.trim() !== '') {
          this.profilePhotoUrl = profiles[0].photoUrl;
        }
      });
    }
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
