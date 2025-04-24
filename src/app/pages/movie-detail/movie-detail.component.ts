import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Вот он
import { Movie } from '../models/movie.model';
import { moviesData } from '../data/movies.mock';
import { ReviewSectionComponent } from '../review-section/review-section.component';


@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, ReviewSectionComponent], // ✅ добавляем сюда
  template: `
  <div class="detail-container" *ngIf="movie">
      <img [src]="movie.poster" alt="{{ movie.title }}">
      <div class="details">
        <h1>{{ movie.title }}</h1>
        <p><strong>Year:</strong> {{ movie.year }}</p>
        <p><strong>Country:</strong> {{ movie.country }}</p>
        <p><strong>Genre:</strong> {{ movie.genre }}</p>
        <p><strong>Rating:</strong> ⭐ {{ movie.rating }}</p>
        <p class="description">{{ movie.description }}</p>
      </div>
      <app-review-section [movieId]="movie.id"></app-review-section>
    </div>
    `,
    styles: [`
      .detail-container {
      display: flex;
      flex-wrap: wrap;
      padding: 40px;
      color: white;
    }
    .detail-container img {
      max-width: 300px;
      border-radius: 10px;
      margin-right: 40px;
    }
    .details {
      max-width: 600px;
    }
    .description {
      margin-top: 20px;
      font-size: 18px;
      line-height: 1.6;
    }
  `]
  })
  export class MovieDetailComponent implements OnInit {
    movie!: Movie | undefined;

    constructor(private route: ActivatedRoute) {}
    ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.movie = moviesData.find(m => m.id === id)!;
    }
  }


