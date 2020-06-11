import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBooks from './books.reducer';
import { BookListItem } from '../models';

export const featureName = 'books';

export interface BooksState {
    books: fromBooks.BookState;
}

export const reducers: ActionReducerMap<BooksState> = {
    books: fromBooks.reducer
};

// 1. select feature
const selectBooksFeature = createFeatureSelector<BooksState>(featureName);

// 2. select branch
const selectBookBranch = createSelector(
    selectBooksFeature,
    f => f.books
);

// 3. helpers
// no idea what the below syntax does
const { selectAll: selectBookEntityArray } = fromBooks.adapter.getSelectors(selectBookBranch);

// 4. finally return books as BookListItem[] so the parent books component can pass it to list component to display
export const selectBookListItems = createSelector(
    selectBookEntityArray,
    (books) => books as BookListItem[]
);
