import { Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { ReviewFormComponent } from './pages/review-form/review-form.component';
import { GenresComponent } from './pages/genres/genres.component';
import { AboutComponent } from './pages/about/about.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { DramaMoviesComponent } from './pages/drama-movies/drama-movies.component';



export const routes: Routes = [
  //{ path: '', redirectTo: 'genres', pathMatch: 'full' },
  { path: '', component: GenresComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'forgot-password', component: ForgotPasswordComponent },
  //{ path: 'genres', component: GenresComponent },
  { path: 'movies', component: MoviesListComponent },
  //{ path: 'drama', component: DramaMoviesComponent },
  { path: 'movies', component: MoviesListComponent},
  { path: 'movie/:id', component: MovieDetailComponent},
  //{ path: 'movie/:id/review', component: ReviewFormComponent },
  { path: 'about', component: AboutComponent },
];