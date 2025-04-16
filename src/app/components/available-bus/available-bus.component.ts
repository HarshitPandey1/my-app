import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AvailableBusCardComponent } from './available-bus-card/available-bus-card.component';
import { FromToBlockComponent } from '../from-to-block/from-to-block.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-available-bus',
  standalone: true,
  imports: [CommonModule, AvailableBusCardComponent, FromToBlockComponent, HeaderComponent],
  templateUrl: './available-bus.component.html',
  styleUrl: './available-bus.component.css'
})
export class AvailableBusComponent implements OnInit {
  buses: any[] = [];
  filteredBuses: any[] = [];
  sortedBuses: any[] = [];

  expandedIndex: number | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const from = (params['from'] || '').toLowerCase();
      const to = (params['to'] || '').toLowerCase();
      const date = params['date'];

      this.http.get<any[]>('http://localhost:3001/buses').subscribe(data => {
        this.buses = data;

        this.filteredBuses = this.buses.filter(bus => {
          const matchesFrom = from ? bus.from.toLowerCase().includes(from) : true;
          const matchesTo = to ? bus.to.toLowerCase().includes(to) : true;
          const matchesDate = date ? bus.departure.startsWith(date) : true;

          return matchesFrom && matchesTo && matchesDate;
        });

        this.sortedBuses = [...this.filteredBuses];
      });
    });

  }

  toggleExpand(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSortChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    this.sortedBuses = [...this.filteredBuses]; 
    console.log('Sort selected:', value); // ✅ should log on dropdown change

    switch (value) {
      case 'fare-asc':
        this.sortedBuses.sort((a, b) => a.price - b.price);
        break;
      case 'fare-desc':
        this.sortedBuses.sort((a, b) => b.price - a.price);
        break;
      case 'time-asc':
        this.sortedBuses.sort((a, b) => this.getTimeValue(a.departure) - this.getTimeValue(b.departure));
        break;
      case 'time-desc':
        this.sortedBuses.sort((a, b) => this.getTimeValue(b.departure) - this.getTimeValue(a.departure));
        break;
      default:
        this.sortedBuses = [...this.filteredBuses];
        break;
    }
  }

  getTimeValue(timeStr: string): number {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }
}
