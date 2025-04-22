import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MovieService, Movie } from '../../services/movie.service';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const genreParam = this.route.snapshot.queryParamMap.get('genre');
    const genre = genreParam ? +genreParam : null;

    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;

      const genreMap: { [key: number]: string } = {
        1: 'Comedy',
        2: 'Action',
        3: 'Drama',
        4: 'Thriller',
        5: 'Sci-Fi'
      };

      if (genre !== null && genreMap[genre]) {
        const selectedGenre = genreMap[genre];
        this.filteredMovies = data.filter(movie =>
          movie.genre.toLowerCase() === selectedGenre.toLowerCase()
        );
      } else {
        this.filteredMovies = data;
      }
    });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/movie', id]);
  }
}