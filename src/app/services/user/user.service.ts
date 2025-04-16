import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  private profileUrl = 'http://localhost:3002/profile';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData).pipe(
      switchMap((createdUser: any) => {
        // Store user info in localStorage
        localStorage.setItem('userId', createdUser.id);
        localStorage.setItem('userName', createdUser.name); // optional
        localStorage.setItem('userEmail', createdUser.email); // optional
  
        const defaultProfile = {
          id: createdUser.id,
          name: createdUser.name,
          email: createdUser.email,
          role: '',
          location: '',
          skills: '',
          photoUrl: ''
        };
  
        return this.addProfileUser(defaultProfile);
      })
    );
  }
  

  addProfileUser(profileData: any): Observable<any> {
    return this.http.post(this.profileUrl, profileData);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
