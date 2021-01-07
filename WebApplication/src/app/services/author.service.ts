import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../shared/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorResource {

  constructor(private http: HttpClient) { }

  createAuthor(author: Author): Observable<void> {
    return this.http.post<void>('api/Author', author);
  };

  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('api/Genre');
  };

  deleteAllUsers(): Observable<void> {
    return this.http.delete<void>('api/Book')
  };
}
