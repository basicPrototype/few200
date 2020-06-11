import { createAction } from '@ngrx/store';
import { BookEntity } from '../reducers/books.reducer';

let id = 0;

export const addBook = createAction(
    '[books] add book',
    ({ title, author, format }: { title: string, author: string, format: string }) => ({
        payload: {
            id: 'T' + id++,
            title,
            author,
            format
        } as BookEntity
    })
);
