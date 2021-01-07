import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenreResource } from 'src/app/services/genre.service';
import { Genre } from 'src/app/shared/genre';


@Component({
  selector: 'app-genredetail',
  templateUrl: './genredetail.component.html',
  styleUrls: ['./genredetail.component.scss']
})
export class GenredetailComponent {
  genre = new Genre

  constructor(
    private genreResurce: GenreResource,
    private router: Router
  ) { }

  save(): void {
    this.genreResurce.createGenre(this.genre)
      .subscribe(() => {
        this.router.navigate(['/addauthor']);
      });

  }

}
