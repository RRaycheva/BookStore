import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorResource } from 'src/app/services/author.service';
import { Author } from 'src/app/shared/author';

@Component({
  selector: 'app-authordetail',
  templateUrl: './authordetail.component.html',
  styleUrls: ['./authordetail.component.scss']
})
export class AuthordetailComponent {

  author = new Author;

  constructor(
    private authorResurce: AuthorResource,
    private router: Router
  ) { }

  save(): void {
    this.authorResurce.createAuthor(this.author)
      .subscribe(() => {
        this.router.navigate(['/addbook']);
      });

  }
}
