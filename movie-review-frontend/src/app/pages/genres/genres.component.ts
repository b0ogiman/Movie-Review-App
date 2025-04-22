import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component'; // ✅ подключаем шапку
import { GENRES } from '../../core/mock/genres';

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [CommonModule, NavbarComponent], // ✅ добавили сюда
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