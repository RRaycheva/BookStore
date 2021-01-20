import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookResource } from 'src/app/services/book.service';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-about-book',
  templateUrl: './about-book.component.html',
  styleUrls: ['./about-book.component.scss']
})
export class AboutBookComponent implements OnInit {

  book = new Book();

  constructor(
    private route: ActivatedRoute,
    private bookResource: BookResource
  ) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');

    this.bookResource.getBookId(bookId)
      .subscribe((data: Book) => this.book = data);
  }
}
