import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  isClicked = false;
  registerError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isClicked = true;
      const { username, email, password } = this.registerForm.value;

      this.userService.getUsers().subscribe(users => {
        const existingUser = users.find((user: any) =>
          user.username === username || user.email === email
        );

        if (existingUser) {
          this.registerError = 'User already exists.';
          this.isClicked = false;
        } else {
          this.userService.registerUser({ username, email, password }).subscribe(
            () => {
              this.registerError = null;
              alert('Registration successful!');
              setTimeout(() => {
                this.router.navigate(['/login']);
              }, 600);
            },
            error => {
              console.error('Registration failed', error);
              this.isClicked = false;
            }
          );
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
