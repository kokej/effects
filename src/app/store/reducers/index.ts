import * as fromTodo from './todos.reducers';
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';

export interface TodoState {
    todos: fromTodo.TodoState;
}

export const reducers: ActionReducerMap<TodoState> = {
    todos: fromTodo.reducers
};

export const getTodoState = createFeatureSelector<any>('todos');

export const getTodos = createSelector(getTodoState, fromTodo.getTodos);
export const getTodo = createSelector(getTodoState, fromTodo.getTodo);
export const getLoading = createSelector(getTodoState, fromTodo.getLoading);

export const metaReducers: MetaReducer<TodoState>[] = !environment.production ? [] : [];
