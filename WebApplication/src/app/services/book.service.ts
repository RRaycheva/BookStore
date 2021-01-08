import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Book } from '../shared/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookResource {

  constructor(private http: HttpClient) { }

  createBook(book: Book): Observable<void> {
    return this.http.post<void>('api/Book', book);
  };

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('api/Book');
  };

  deleteAllBooks(): Observable<void> {
    return this.http.delete<void>('api/Book')
  };

}
