import { Action } from '@ngrx/store';
import { Todo } from '../../todo';

export const TODO_GET = '[Todo] get todo';
export const TODO_GET_FAIL = '[Todo] get todo fail';
export const TODO_GET_SUCCESS = '[Todo] get todo success';

export const TODO_GET_ALL = '[Todo] get all todos';
export const TODO_GET_ALL_FAIL = '[Todo] get all todos fail';
export const TODO_GET_ALL_SUCCESS = '[Todo] get all todos success';

export const TODO_POST = '[Todo] post todo';
export const TODO_POST_FAIL = '[Todo] post todo fail';
export const TODO_POST_SUCCESS = '[Todo] post todo success';

export const TODO_DELETE = '[Todo] delete todo';
export const TODO_DELETE_FAIL = '[Todo] delete todo fail';
export const TODO_DELETE_SUCCESS = '[Todo] delete todo success';

export class Get implements Action {
    readonly type = TODO_GET;
}

export class GetSuccess implements Action {
    readonly type = TODO_GET_SUCCESS;
    constructor(public payload: Todo) {}
}

export class GetFail implements Action {
    readonly type = TODO_GET_FAIL;
}

export class GetAll implements Action {
    readonly type = TODO_GET_ALL;
}

export class GetAllSuccess implements Action {
    readonly type = TODO_GET_ALL_SUCCESS;
    constructor(public payload: Todo[]) {}
}

export class GetAllFail implements Action {
    readonly type = TODO_GET_ALL_FAIL;
}

export class Post implements Action {
    readonly type = TODO_POST;
    constructor(public payload: string) {}
}

export class PostSuccess implements Action {
    readonly type = TODO_POST_SUCCESS;
    constructor(public payload: Todo) {}
}

export class PostFail implements Action {
    readonly type = TODO_POST_FAIL;
}

export class Delete implements Action {
    readonly type = TODO_DELETE;
    constructor(public payload: number) {}
}

export class DeleteSuccess implements Action {
    readonly type = TODO_DELETE_SUCCESS;
    constructor(public payload: Todo) {}
}

export class DeleteFail implements Action {
    readonly type = TODO_DELETE_FAIL;
}

/* export class LoginUser implements Action {
    readonly type = TODO;
    constructor(public payload: Todo) {}
}

export class LoginUserWithProvider implements Action {
    readonly type = TODO_WITH_PROVIDER;
}

export class LoginUserFail implements Action {
    readonly type = TODO_FAIL;
    constructor(public payload: any) {}
}

export class LoginUserSuccess implements Action {
    readonly type = TODO_SUCCESS;
    constructor(public payload: Todo) {}
}

export class LogoutUser implements Action {
    readonly type = LOGOUT_USER;
}

export class LogoutUserFail implements Action {
    readonly type = LOGOUT_USER_FAIL;
    constructor(public payload: any) {}
}

export class LogoutUserSuccess implements Action {
    readonly type = LOGOUT_USER_SUCCESS;
} */

export type TodosAction =
    | Get
    | GetSuccess
    | GetFail
    | GetAll
    | GetAllFail
    | GetAllSuccess
    | Post
    | PostSuccess
    | PostFail
    | Delete
    | DeleteFail
    | DeleteSuccess;
