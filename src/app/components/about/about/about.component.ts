import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  loved = false;
  currentStat: string | null = null;
  
  toggleLove() {
    this.loved = !this.loved;
    if (this.loved) {
      setTimeout(() => {
        this.loved = false;
      }, 2000); // remove emoji after 2 sec
    }
  }
  
  showStat(type: string) {
    switch (type) {
      case 'rides':
        this.currentStat = 'Over 12,000 rides daily!';
        break;
      case 'users':
        this.currentStat = '1M+ happy users!';
        break;
      case 'cities':
        this.currentStat = 'Serving 300+ cities!';
        break;
    }
  
    setTimeout(() => {
      this.currentStat = null;
    }, 3000); // hide after 3 sec
  }
  
}
