import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private idFrom = 1;
    private todos = [ { id: 1, name: 'first todo' } ];
    constructor() {}

    public get(): Promise<Todo[]> {
        const error = new Error('no todos');
        console.warn('[Network] get success ->', this.todos);
        return new Promise((resolve, reject) => {
            return this.todos.length > 0 ? resolve(this.todos) : reject(error);
        });
    }

    public getById(id): Observable<Todo> {
        const todo = this.todos.filter((item) => item.id === id)[0];
        console.warn('[Network] getById success ->', todo);
        return of(todo);
    }

    public delete(id): Observable<Todo> {
        const todo = this.todos.filter((item) => item.id === id)[0];
        if (todo) {
            this.todos = this.todos.filter((item) => item.id !== id);
            console.warn('[Network] getById success ->', todo);
            return of(todo);
        }
    }

    public post(name): Observable<Todo> {
        const id = ++this.idFrom;
        const todo: Todo = {
            id,
            name
        };
        this.todos.push(todo);
        console.warn('[Network] post success ->', todo);
        return of(todo);
    }
}
