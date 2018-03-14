import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule, NgModel } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookItemsComponent } from './book-items/book-items.component';
import { Book } from './book-items/books';
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
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [Book],
  bootstrap: [AppComponent]
})
export class AppModule { }
