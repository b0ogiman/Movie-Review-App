import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DRAMA_MOVIES } from '../../core/mock/drama-movies';

@Component({
  selector: 'app-drama-movies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './drama-movies.component.html',
  styleUrls: ['./drama-movies.component.scss']
})
export class DramaMoviesComponent {
  movies = DRAMA_MOVIES;

  goToDetail(id: number) {
    // маршрут, например: /movie/1
  }
}