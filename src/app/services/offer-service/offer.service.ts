import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private apiUrl = 'http://localhost:3000/offers'; // JSON Server URL

  constructor(private http: HttpClient) {}

  getOffers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addOffer(offerData: any): Observable<any> {
    return this.http.post(this.apiUrl, offerData);
  }
}
