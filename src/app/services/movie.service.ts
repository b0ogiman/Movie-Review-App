import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string;
  rating: number;
  poster?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://127.0.0.1:8000/api/movies/';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}${id}/`);
  }
}