import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BookDetailComponent } from './components/bookdetail/bookdetail.component';
import { LoginComponent } from './components/login/login.component';
import { GenredetailComponent } from './components/genredetail/genredetail.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'books',
    component: BooksListComponent
  },
  {
    path: 'addbook',
    component: GenredetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
