// used ngrxr snippet
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface EntityInterface {

}

export interface State extends EntityState<EntityInterface> {

}

export const adapter = createEntityAdapter<EntityInterface>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
    initialState
);

export function reducer(state: State = initialState, action: Action) {
    return reducerFunction(state, action);
}


