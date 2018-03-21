import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule, NgModel } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookItemsComponent } from './book-items/book-items.component';
import { Book } from './book-items/books';
import { BookNavComponent } from './book-nav/book-nav.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookInfomationComponent } from './book-infomation/book-infomation.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { BookTypesComponent } from './book-types/book-types.component';
import { BookTypes } from './book-types/book-types';
import { bookTypesRouting } from './book-types/book-types-routing';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UsersComponent } from './users/users.component';




@NgModule({
  declarations: [
    AppComponent,
    BookItemsComponent,
    BookNavComponent,
    BookSearchComponent,
    BookInfomationComponent,
    PageNotFoundComponent,
    BookTypesComponent,
    ContactUsComponent,
    UsersComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    bookTypesRouting
  ],
  providers: [Book,BookTypes],
  bootstrap: [AppComponent]
})
export class AppModule { }
