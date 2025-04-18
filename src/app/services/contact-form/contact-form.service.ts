import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private baseUrl = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {}

  saveContact(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}
