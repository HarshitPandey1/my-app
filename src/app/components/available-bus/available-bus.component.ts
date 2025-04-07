import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AvailableBusCardComponent } from './available-bus-card/available-bus-card.component';
import { FromToBlockComponent } from '../from-to-block/from-to-block.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-available-bus',
  imports: [CommonModule,RouterLink,AvailableBusCardComponent,DatePipe,JsonPipe,FromToBlockComponent,HeaderComponent],
  templateUrl: './available-bus.component.html',
  styleUrl: './available-bus.component.css'
})
export class AvailableBusComponent implements OnInit {
  buses: any[] = [];
  filteredBuses: any[] = [];

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
      });
    });
  }
  expandedIndex: number | null = null;

  toggleExpand(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}