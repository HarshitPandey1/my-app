import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-available-bus',
  imports: [CommonModule,RouterLink],
  templateUrl: './available-bus.component.html',
  styleUrl: './available-bus.component.css'
})
export class AvailableBusComponent {
  buses: any[] = [];
  expandedIndex: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3001/buses').subscribe(data => {
      this.buses = data;
    });
  }
  toggleExpand(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
