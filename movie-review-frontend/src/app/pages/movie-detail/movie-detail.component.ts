import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent {
  movie: any = null;
  reviews: any[] = [];
  movieId!: number;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));

    this.apiService.getMovie(this.movieId).subscribe((data) => {
      this.movie = data;
    });

    this.apiService.getReviews(this.movieId).subscribe((data) => {
      this.reviews = data;
    });
  }
}
