import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container text-white py-5 text-center">
      <h1 class="bebas mb-4">ABOUT US</h1>
      <p class="mb-5">
        This movie review app was built with ❤️ by Kamilla, Iman and Aigerim using Angular magic.
      </p>

      <div class="d-flex flex-wrap justify-content-center gap-4">
        <div class="member-card" *ngFor="let person of team">
          <img [src]="person.photo" [alt]="person.name" class="member-photo" />
          <h5 class="member-name">{{ person.name.toUpperCase() }}</h5>
          <p class="role">{{ person.role }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .member-card {
      background-color: #111;
      padding: 1rem;
      border-radius: 8px;
      border: 2px solid #e50914;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
      transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
      width: 250px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .member-card:hover {
      transform: translateY(-5px);
      border-color: #b0060f;
      box-shadow: 0 0 15px rgba(229, 9, 20, 0.4);
    }

    .member-photo {
      width: 100%;
      height: 280px;
      object-fit: cover;
      border-radius: 6px;
      background-color: #222;
    }

    .member-name {
      margin-top: 0.75rem;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.3rem;
      color: white;
      letter-spacing: 1px;
    }

    .role {
      font-size: 0.95rem;
      color: #ccc;
      font-weight: 300;
    }
  `]
})
export class AboutComponent {
  team = [
    {
      name: 'Kamilla',
      photo: '/kamilla.jpg',
      role: 'Frontend Developer'
    },
    {
      name: 'Iman',
      photo: '/iman.jpg',
      role: 'Backend Developer'
    },
    {
      name: 'Aigerim',
      photo: '/aigerim.jpg',
      role: 'Fullstack Connector'
    }
  ];
}