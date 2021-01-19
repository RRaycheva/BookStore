import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookResource } from 'src/app/services/book.service';
import { Book } from 'src/app/shared/book';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];
  public checkboxGroupForm: FormGroup;

  constructor(
    private bookResource: BookResource
  ) { }

  ngOnInit(): void {
    this.bookResource.getAllBooks()
      .subscribe((data: Book[]) => this.books = data);


  }
}


