import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Вот он

interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string;
  rating: number;
  poster: string;
}

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule], // ✅ добавляем сюда
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie!: Movie;

  mockMovies: Movie[] = [
    {
      id: 1,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space...',
      genre: 'Sci-Fi',
      rating: 8.6,
      poster: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg'
    },
    {
      id: 2,
      title: 'John Wick',
      description: 'An ex-hitman comes out of retirement...',
      genre: 'Action',
      rating: 7.8,
      poster: 'https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const movieId = +this.route.snapshot.paramMap.get('id')!;
    const found = this.mockMovies.find(m => m.id === movieId);
    if (found) {
      this.movie = found;
    }
  }
}