import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureSlideComponent } from './components/feature-slide/feature-slide.component';
import { BannerComponent } from './components/banner/banner.component';
import { BestsellerComponent } from './components/bestseller/bestseller.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FeatureSlideComponent,
    BannerComponent,
    BestsellerComponent,
    FooterComponent,
    ProductGridComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
