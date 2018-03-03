import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookItemsComponent } from './book-items/book-items.component';
import { BookNavComponent } from './book-nav/book-nav.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookInfomationComponent } from './book-infomation/book-infomation.component'


@NgModule({
  declarations: [
    AppComponent,
    BookItemsComponent,
    BookNavComponent,
    BookSearchComponent,
    BookInfomationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
