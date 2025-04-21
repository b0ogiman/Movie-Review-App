import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GENRES } from '../../core/mock/genres';

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent {
  genres = GENRES;

  constructor(private router: Router) {}

  selectGenre(genreId: number) {
    this.router.navigate(['/movies'], { queryParams: { genre: genreId } });
  }
}