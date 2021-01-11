import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthorResource } from 'src/app/services/author.service';
import { BookResource } from 'src/app/services/book.service';
import { GenreResource } from 'src/app/services/genre.service';
import { Author } from 'src/app/shared/author';
import { Book } from 'src/app/shared/book';
import { Genre } from 'src/app/shared/genre';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookDetailComponent {
  book = new Book();

  authors$: Observable<Author[]>;
  genres$: Observable<Genre[]>;

  constructor(
    private bookResource: BookResource,
    private authorResоurce: AuthorResource,
    private genreResource: GenreResource,
    public router: Router
  ) {
    this.authors$ = this.authorResоurce.getAllAuthors();
    this.genres$ = this.genreResource.getAllGenres();
  }

  save(): void {
    this.bookResource.createBook(this.book)
      .subscribe(() => {
        this.router.navigate(['/books']);
      });
  }
}
