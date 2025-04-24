import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Movie } from '../models/movie.model';
import { moviesData } from "../data/movies.mock";
import { MovieCardComponent } from "../movie-card/movie-card.component";

@Component ({
    selector: 'app-movies-browser',
    standalone: true,
    imports: [CommonModule, MovieCardComponent],
    template: `
    <div class="genre-buttons">
      <button *ngFor="let g of genres" (click)="selectedGenre = g">{{ g | titlecase }}</button>
    </div>

    <div class="movies-container">
      <app-movie-card
        *ngFor="let movie of filteredMovies"
        [movie]="movie">
      </app-movie-card>
    </div>`
    ,
    styles: [`
        .genre-buttons {
      display: flex;
      gap: 12px;
      justify-content: center;
      margin-top: 20px;
    }
    .genre-buttons button {
      padding: 8px 16px;
      border: none;
      border-radius: 8px;
      background-color: #444;
      color: white;
      cursor: pointer;
      transition: background 0.3s;
    }
    .genre-buttons button:hover {
      background-color: #777;
    }
    .movies-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 20px;
      gap: 20px;
      `]
})
export class MoviesBrowserComponent {
    genres = ['action', 'drama', 'comedy', 'sci-fi', 'thriller'];
    selectedGenre = 'action';
    movies = moviesData;

    get filteredMovies() {
        return this.movies.filter(m => m.genre === this.selectedGenre);
    }
}