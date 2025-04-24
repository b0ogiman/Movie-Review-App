import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})
export class ReviewFormComponent {
  movieId!: number;
  text: string = '';
  rating: number = 5;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
  }

  submitReview() {
    const reviewData = {
      text: this.text,
      rating: this.rating
    };

    this.apiService.addReview(this.movieId, reviewData).subscribe({
      next: () => {
        this.router.navigate(['/movie', this.movieId]); // после отправки — назад на страницу фильма
      },
      error: (err) => {
        console.error('Ошибка при отправке отзыва:', err);
      }
    });
  }
}

