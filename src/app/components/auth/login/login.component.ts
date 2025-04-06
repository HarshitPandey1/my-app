import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;
  isClicked: boolean = false; // To trigger button animation

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      identifier: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isClicked = true; // Start button animation

      const { identifier, password } = this.loginForm.value;

      this.userService.getUsers().subscribe(users => {
        const matchedUser = users.find((user: any) =>
          (user.username === identifier || user.email === identifier) && user.password === password
        );

        if (matchedUser) {
          this.loginError = null;

          // Delay navigation to allow button animation
          setTimeout(() => {
            alert('Login successful!');
            this.router.navigate(['/dashboard']);
          }, 600);
        } else {
          // Reset animation and show error
          this.isClicked = false;
          this.loginError = 'Invalid credentials.';
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
