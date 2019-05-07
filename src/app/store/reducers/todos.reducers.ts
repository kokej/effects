import * as fromTodo from '../actions/todos.actions';
import { Todo } from '../../todo';

export interface TodoState {
    todo: Todo;
    todos: Todo[];
    loading: boolean;
}

export const initialState: TodoState = {
    todo: null,
    todos: [],
    loading: false
};

export function reducers(state = initialState, action: fromTodo.TodosAction): TodoState {
    switch (action.type) {
        case fromTodo.TODO_GET: {
            return {
                ...state,
                loading: true
            };
        }
        case fromTodo.TODO_GET_SUCCESS: {
            const todo = action.payload;
            return {
                ...state,
                todo: todo,
                loading: false
            };
        }
        case fromTodo.TODO_GET_FAIL: {
            return {
                ...state,
                loading: false
            };
        }
        case fromTodo.TODO_GET_ALL: {
            return {
                ...state,
                loading: true
            };
        }
        case fromTodo.TODO_GET_ALL_SUCCESS: {
            const todos: Todo[] = action.payload;
            return {
                ...state,
                loading: false,
                todos
            };
        }
        case fromTodo.TODO_GET_ALL_FAIL: {
            return {
                ...state,
                loading: false
            };
        }
        case fromTodo.TODO_POST: {
            return {
                ...state,
                loading: true
            };
        }
        case fromTodo.TODO_POST_SUCCESS: {
            //const todos: Todo[] = state.todos.push(action.payload);
            return {
                ...state,
                loading: false
                // todos: todos
            };
        }
        case fromTodo.TODO_POST_FAIL: {
            return {
                ...state,
                loading: false
            };
        }
    }
    return state;
}

export const getTodos = (state: TodoState) => state.todos;
export const getTodo = (state: TodoState) => state.todo;
export const getLoading = (state: TodoState) => state.loading;
