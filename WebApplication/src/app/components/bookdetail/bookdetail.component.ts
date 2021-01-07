import { Component } from '@angular/core';
import { BookResource } from 'src/app/services/book.service';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookDetailComponent {
  book = new Book();

  constructor(
    private bookResource: BookResource
  ) { }

  save(): void {
    this.bookResource.createBook(this.book)
      .subscribe();
  }
}
