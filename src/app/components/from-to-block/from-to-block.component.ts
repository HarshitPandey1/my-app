import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-from-to-block',
  imports: [RouterLink],
  templateUrl: './from-to-block.component.html',
  styleUrl: './from-to-block.component.css'
})
export class FromToBlockComponent {
  constructor(private router: Router) {}

  searchBuses(from: string, to: string, date: string) {
    this.router.navigate(['/available-bus'], {
      queryParams: {
        from,
        to,
        date
      }
    });
  }
}
