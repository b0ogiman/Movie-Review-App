import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('access', response.access);
        localStorage.setItem('refresh', response.refresh);
        this.router.navigate(['/genres']);
      },
      error: () => {
        this.errorMessage = 'Неверный логин или пароль';
      }
    });

  }

  forgotPassword() {
    alert('Мы отправим вам ссылку для восстановления (в будущем 😄)');
  }
}
function forgotPassword() {
  throw new Error('Function not implemented.');
}

