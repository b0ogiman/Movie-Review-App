import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api'; // URL к твоему Django-бэкенду

  constructor(private http: HttpClient) { }

  // Получить список всех фильмов
  getMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movies/`);
  }

  // Получить один фильм по id
  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movies/${id}/`);
  }
}