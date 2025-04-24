import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email = '';
  successMessage = '';

  constructor(private router: Router) {}

  sendResetLink() {
    // 💌 Это просто заглушка
    this.successMessage = `Reset link sent to ${this.email}. Check your inbox 😉`;
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}