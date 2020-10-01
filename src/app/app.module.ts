import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./elements/navbar/navbar.component";
import {MasonryComponent} from "./elements/masonry/masonry.component";
import {HeaderComponent} from "./elements/header/header.component";
import {PhotoOnPageComponent} from "./elements/masonry/items/photo-on-page/photo-on-page.component";
import {MainPageComponent} from "./main/main-page/main-page.component";
import {MasonryModule} from "./global-modules/masonry/masonry.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MainPageComponent,
    MasonryComponent,
    MasonryComponent,
    PhotoOnPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PhotoOnPageComponent]
})
export class AppModule { }
