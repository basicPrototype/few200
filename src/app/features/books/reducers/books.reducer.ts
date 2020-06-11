// used ngrxr snippet
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface BookEntity {
    id: string;
    title: string;
    author: string;
    format: string;
}

export interface BookState extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
    initialState
);

export function reducer(state: BookState = initialState, action: Action) {
    return reducerFunction(state, action);
}


