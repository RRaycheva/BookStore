import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private genreResource: GenreResource, public router: Router) {
    this.genres$ = this.genreResource.getAllGenres();
  }
  route(): void {
    this.router.navigate(['/books']);
  };

  ngOnInit(): void {
  }

}
