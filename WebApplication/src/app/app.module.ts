import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BestsellerComponent } from './components/bestseller/bestseller.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookResource } from './services/book.service';
import { UserResource } from './services/user.service';
import { AuthorResource } from './services/author.service';
import { GenreResource } from './services/genre.service';
import { BookDetailComponent } from './components/bookdetail/bookdetail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { GenredetailComponent } from './components/genredetail/genredetail.component';
import { AuthordetailComponent } from './components/authordetail/authordetail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BestsellerComponent,
    BannerComponent,
    HomepageComponent,
    BooksListComponent,
    BookDetailComponent,
    LoginComponent,
    GenredetailComponent,
    AuthordetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookResource, UserResource, AuthorResource, GenreResource],
  bootstrap: [AppComponent]
})
export class AppModule { }
