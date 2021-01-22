import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorResource } from 'src/app/services/author.service';
import { BookResource } from 'src/app/services/book.service';
import { GenreResource } from 'src/app/services/genre.service';
import { Author } from 'src/app/shared/author';
import { Book } from 'src/app/shared/book';
import { Genre } from 'src/app/shared/genre';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Book[] = []
  genres$: Observable<Genre[]>
  authors$: Observable<Author[]>;


  constructor(
    private router: Router,
    private bookResource: BookResource,
    private authorResоurce: AuthorResource,
    private genreResource: GenreResource
  ) {
    this.authors$ = this.authorResоurce.getAllAuthors();
    this.genres$ = this.genreResource.getAllGenres();
  }

  ngOnInit(): void {
    this.bookResource.getAllBooks()
      .subscribe((data: Book[]) => this.books = data);
  }

  buy(bookId: number): void {
    this.router.navigate(['/aboutbook', bookId]);
  }
}


