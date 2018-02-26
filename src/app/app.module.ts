import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookItemsComponent } from './book-items/book-items.component';
import { BookNavComponent } from './book-nav/book-nav.component'


@NgModule({
  declarations: [
    AppComponent,
    BookItemsComponent,
    BookNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
