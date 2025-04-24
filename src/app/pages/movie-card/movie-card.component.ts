import { Component, Input, Output, EventEmitter } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Movie } from '../models/movie.model';

@Component ({
    selector: 'app-movie-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="movie-card" (click)="goToDetails()">
      <img [src]="movie.poster" alt="{{ movie.title }}">
      <div class="movie-info">
        <h3>{{ movie.title }}</h3>
        <p>⭐ {{ movie.rating }}</p>
      </div>
    </div> `
     ,
    styles: [`
    .movie-card {
      width: 180px;
      background-color: #1a1a1a;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .movie-card:hover {
      transform: scale(1.05);
    }
    .movie-card img {
      width: 100%;
      height: 270px;
      object-fit: cover;
    }
    .movie-info {
      padding: 10px;
      color: white;
      text-align: center;
    }
    `]
})
export class MovieCardComponent {
    @Input() movie!: Movie;

    @Output() movieClicked = new EventEmitter<Movie>();

    goToDetails() {
        this.movieClicked.emit(this.movie);
    }
}
