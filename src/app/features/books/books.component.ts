import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookListItem } from './models';
import { Store, select } from '@ngrx/store';
import { BooksState, selectBookListItems } from './reducers';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<BookListItem[]>;
  constructor(private store: Store<BooksState>) { }

  ngOnInit(): void {
    this.books$ = this.store.pipe(
      select(selectBookListItems)
    );
  }

}
