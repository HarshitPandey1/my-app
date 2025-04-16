import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Profile {
  id: number;
  name: string;
  email: string;
  location: string;
  role: string;
  skills: string;
  image: string;
  photoUrl: string;
}
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileApiUrl = 'http://localhost:3002/profile'; // Profile API URL

  constructor(private http: HttpClient) {}

  getProfileByUserId(userId: string): Observable<any> {
    return this.http.get(`${this.profileApiUrl}?userId=${userId}`)

  }
  

  updateProfile(profile: Profile): Observable<any> {
    return this.http.put(`${this.profileApiUrl}/${profile.id}`, profile);
  }
  
}
