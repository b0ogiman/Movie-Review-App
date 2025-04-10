import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movies-list.component.html',
})
export class MoviesListComponent {
  movies: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }
}