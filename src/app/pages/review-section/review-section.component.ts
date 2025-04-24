import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

interface Review {
    author: string;
    text: string;
    date: Date;
}
@Component({
    selector: 'app-review-section',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="review-container">
    <h3>Leave a review</h3>
    
    <textarea [(ngModel)]="newReview.text" placeholder="Write a review..."></textarea>
    <input [(ngModel)]="newReview.author" placeholder="Your name" />
    <button (click)="addReview()">Add</button>
    
    <div class="review" *ngFor="let review of reviews">
        <div class="review-header">
          <strong>{{ review.author }}</strong> |
          <span>{{ review.date | date:'dd MMMM yyyy, HH:mm' }}</span>
        </div>
        <div class="review-text">{{ review.text }}</div>
      </div>
    </div>`
    ,
    styles: [
        `
    .review-container {
      margin-top: 30px;
      padding: 20px;
      background-color: #1c1c1c;
      border-radius: 12px;
      color: white;
    }

    textarea {
      width: 100%;
      height: 100px;
      margin: 10px 0;
      padding: 10px;
      font-size: 14px;
      background: #2a2a2a;
      color: white;
      border: none;
      border-radius: 8px;
      resize: none;
    }

    input {
      width: 200px;
      margin-right: 10px;
      padding: 8px;
      background: #2a2a2a;
      color: white;
      border: none;
      border-radius: 6px;
    }

    button {
      padding: 8px 14px;
      background: #444;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    .review {
      margin-top: 20px;
      padding-top: 10px;
      border-top: 1px solid #444;
    }

    .review-header {
      font-size: 14px;
      margin-bottom: 6px;
      color: #bfbfbf;
    }

    .review-text {
      font-size: 15px;
      line-height: 1.5;
    }`
    ]
})
export class ReviewSectionComponent {
    @Input() movieId!: number;

    newReview: Omit<Review, 'date'> = {
        author: '',
        text: '',
    };
    reviews: Review[] = [];
    ngOnInit() {
        const saved = localStorage.getItem('reviews-'+this.movieId);
        this.reviews = saved 
        ? JSON.parse(saved).map((r: any) => ({
            ...r,
            date: new Date(r.date)
        }))
        : [];
    }

    addReview() {
        if (!this.newReview.author.trim() || !this.newReview.text.trim()) return;

        const review: Review = {
            ...this.newReview,
            date: new Date()
        };
        this.reviews.unshift(review);
        localStorage.setItem('reviews-' +this.movieId, JSON.stringify(this.reviews));

        this.newReview = {author: '', text: ''};
    }
}