import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container text-white py-5 text-center">
    <h1 class="bebas mb-4">About Us</h1>
    <p class="mb-5">This movie review app was built with ❤️ by Kamilla, Iman and Aigerim using Angular magic.</p>

    <div class="row justify-content-center g-4">
  <div class="col-10 col-sm-6 col-md-3" *ngFor="let person of team">
    <div class="member-card">
      <img [src]="person.photo" [alt]="person.name" class="member-photo" />
      <p class="member-name">{{ person.name }}</p>
    </div>
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
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .member-card:hover {
    transform: translateY(-5px);
    border-color: #b0060f; /* более тёмный красный */
    box-shadow: 0 0 15px rgba(229, 9, 20, 0.4); /* красное свечение */
  }

  .member-photo {
    width: 100%;
    max-height: 230px;
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
`]
})
export class AboutComponent {
  team = [
    {
      name: 'Kamilla',
      photo: '/kamilla.jpg'
    },
    {
      name: 'Iman',
      photo: '/iman.jpg'
    },
    {
      name: 'Aigerim',
      photo: '/aigerim.jpg'
    }
  ];
}
