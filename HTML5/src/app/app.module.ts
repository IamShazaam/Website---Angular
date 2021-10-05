import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImagesComponent } from './images/images.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { LastNewsComponent } from './last-news/last-news.component';
import { TopBlockComponent } from './top-block/top-block.component';
import { AboutBlockComponent } from './about-block/about-block.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    HeaderComponent,
    GalleryComponent,
    TopNewsComponent,
    LastNewsComponent,
    TopBlockComponent,
    AboutBlockComponent,
    FooterComponent
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
