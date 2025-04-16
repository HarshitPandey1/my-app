import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-from-to-block',
  imports: [RouterLink,CommonModule],
  templateUrl: './from-to-block.component.html',
  styleUrl: './from-to-block.component.css'
})
export class FromToBlockComponent implements OnInit {
  allFromOptions: string[] = [];
  allToOptions: string[] = [];

  filteredFromOptions: string[] = [];
  filteredToOptions: string[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3001/buses').subscribe(buses => {
      this.allFromOptions = [...new Set(buses.map(bus => bus.from))];
      this.allToOptions = [...new Set(buses.map(bus => bus.to))];
    });
  }

  filterFrom(value: string): void {
    this.filteredFromOptions = this.allFromOptions.filter(opt =>
      opt.toLowerCase().includes(value.toLowerCase())
    );
  }

  filterTo(value: string): void {
    this.filteredToOptions = this.allToOptions.filter(opt =>
      opt.toLowerCase().includes(value.toLowerCase())
    );
  }

  selectFrom(option: string, input: HTMLInputElement) {
    input.value = option;
    this.filteredFromOptions = [];
  }

  selectTo(option: string, input: HTMLInputElement) {
    input.value = option;
    this.filteredToOptions = [];
  }

  searchBuses(from: string, to: string, date: string) {
    this.router.navigate(['/available-bus'], {
      queryParams: { from, to, date }
    });
  }
}