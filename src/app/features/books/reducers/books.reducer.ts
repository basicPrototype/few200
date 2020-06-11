// used ngrxr snippet
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/books.actions';

export interface BookEntity {
    id: string;
    title: string;
    author: string;
    format: string;
}

export interface BookState extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

// const initialState = adapter.getInitialState();
const initialState: BookState = {
    ids: ['1', '2'],
    entities: {
        1: {
            id: '1',
            title: 'It',
            author: 'Stephen King',
            format: 'ebook'
        },
        2: {
            id: '2',
            title: 'Lonesome Dove',
            author: 'Larry McMurtry',
            format: 'hardcover'
        }
    }
};

const reducerFunction = createReducer(
    initialState,
    on(actions.addBook, (s, a) => adapter.addOne(a.payload, s))
);

export function reducer(state: BookState = initialState, action: Action) {
    return reducerFunction(state, action);
}


