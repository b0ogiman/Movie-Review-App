import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../models/movie.model';
import { moviesData } from '../data/movies.mock';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MovieCardComponent } from '../movie-card/movie-card.component';



@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  template: `
  <h2 class="genre-title">{{ genre | uppercase }} MOVIES</h2>
    <div class="movies-container">
      <app-movie-card *ngFor="let movie of movies" [movie]="movie"></app-movie-card>
    </div>
  `,
  styles: [`
    .genre-title {
      color: white;
      text-align: center;
      margin: 20px 0;
      font-size: 28px;
    }
    .movies-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      padding: 20px;
    }
    `]
  })
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  genre: string = '';

  constructor(private route: ActivatedRoute) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.genre = params.get('genre') || '';
      this.movies = moviesData.filter(
        m => m.genre.toLowerCase() === this.genre.toLowerCase()
      );
    }); 
  }
}