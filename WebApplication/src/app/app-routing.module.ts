import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BookDetailComponent } from './components/bookdetail/bookdetail.component';
import { LoginComponent } from './components/login/login.component';
import { GenredetailComponent } from './components/genredetail/genredetail.component';
import { AuthordetailComponent } from './components/authordetail/authordetail.component';


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
    path: 'addgenre',
    component: GenredetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'addauthor',
    component: AuthordetailComponent
  },
  {
    path: 'addbook',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
