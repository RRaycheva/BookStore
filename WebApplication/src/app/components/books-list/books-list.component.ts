import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookResource } from 'src/app/services/book.service';
import { Book } from 'src/app/shared/book';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private router: Router,
    private bookResource: BookResource
  ) { }

  ngOnInit(): void {
    this.bookResource.getAllBooks()
      .subscribe((data: Book[]) => this.books = data);
  }

  buy(bookId: number): void {
    this.router.navigate(['/aboutbook', bookId]);
  }
}


