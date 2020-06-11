import { ActionReducerMap } from '@ngrx/store';
import * as fromBooks from './books.reducer';

export const featureName = 'books';

export interface BooksState {
    books: fromBooks.BookState;
}

export const reducers: ActionReducerMap<BooksState> = {
    books: fromBooks.reducer
};
