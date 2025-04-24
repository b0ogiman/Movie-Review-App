import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../models/movie.model';
import { moviesData } from '../data/movies.mock';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { ReviewSectionComponent } from '../review-section/review-section.component';

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, ReviewSectionComponent],
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent {
  genres = ['action', 'drama', 'comedy', 'sci-fi', 'thriller'];
  selectedGenre: string = '';
  selectedMovie: Movie | null = null;
  movies = moviesData;

  get filteredMovies(): Movie[] {
    return this.movies.filter(m => m.genre === this.selectedGenre);
  }

  selectGenre(genre: string): void {
    this.selectedGenre = genre;
    this.selectedMovie = null; // сбрасываем выбранный фильм
  }

  openMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }
}

