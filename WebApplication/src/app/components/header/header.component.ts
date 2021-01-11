import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreResource } from 'src/app/services/genre.service';
import { Genre } from 'src/app/shared/genre';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  genres$: Observable<Genre[]>

  constructor(private genreResource: GenreResource) {
    this.genres$ = this.genreResource.getAllGenres();
  }

  ngOnInit(): void {
  }

}
