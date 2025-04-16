import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Profile, ProfileService } from '../../services/profile/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  profileData: any; // Profile data type, this can be customized
  profileCompletion: number = 0;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId'); // ✅ Get userId from storage
  
    if (userId) {
      this.profileService.getProfileByUserId(userId).subscribe((profiles: any[]) => {
        const profile = profiles[0]; // JSON server returns an array with one match
  
        if (profile) {
          this.profileData = profile;
  
          // Initialize the form with fetched data
          this.profileForm = this.fb.group({
            name: [profile.name],
            email: [profile.email],
            location: [profile.location],
            skills: [profile.skills],
            role: [profile.role],
            photoUrl: [profile.photoUrl],
          });
  
          this.calculateCompletion(); // Initial profile score
  
          // Watch for changes to update score
          this.profileForm.valueChanges.subscribe(() => {
            this.calculateCompletion();
          });
        }
      });
    }
  }
  
  
  calculateCompletion(): void {
    const formValue = this.profileForm.value;
    const totalFields = Object.keys(formValue).length;

    const filledFields = Object.values(formValue).filter(val => {
      if (typeof val === 'string') {
        return val.trim() !== '';
      }
      return val !== null && val !== undefined;
    }).length;

    this.profileCompletion = Math.round((filledFields / totalFields) * 100);
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64Image = reader.result as string;
        this.profileForm.patchValue({ photoUrl: base64Image });
        this.calculateCompletion(); // update profile score after image update
      };

      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    const userId = localStorage.getItem('userId');
    if (!userId) return;
  
    const updatedProfile: Profile = {
      id: +userId,  // Make sure it's a number
      ...this.profileForm.value
    };
  
    this.profileService.updateProfile(updatedProfile).subscribe((profile) => {
      this.profileData = profile;
      alert('Profile updated successfully!');
    });
  }
  
}
