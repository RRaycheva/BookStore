import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../shared/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreResource {


  constructor(private http: HttpClient) { }

  createGenre(genre: Genre): Observable<void> {
    return this.http.post<void>('api/Genre', genre);
  };

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>('api/Genre');
  };

}
