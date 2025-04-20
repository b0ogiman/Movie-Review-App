import { Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { ReviewFormComponent } from './pages/review-form/review-form.component';

export const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movie/:id/review', component: ReviewFormComponent },
];