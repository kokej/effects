import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Todo } from '../todo';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
    todos: Todo[] = [];
    todo: Todo;
    constructor(private store: Store<fromStore.TodoState>, private formBuilder: FormBuilder, private api: AppService) {}

    todoForm = this.formBuilder.group({
        name: [ null, Validators.required ]
    });

    getById(id) {
        return this.api.getById(id).subscribe(
            (res) => {
                this.todo = res;
            },
            (err) => console.error('[Network] getById error', err)
        );
    }

    get() {
        this.store.dispatch(new fromStore.GetAll());
        /* return this.api.get().subscribe(
            (res) => {
                this.todos = res;
                if (!this.todo) {
                    this.todo = res[0];
                }
            },
            (err) => console.error('[Network] get error', err)
        ); */
    }

    delete(id) {
        this.api.delete(id).subscribe(
            (res) => {
                this.get();
            },
            (err) => console.error('[Network] post error', err)
        );
    }

    post() {
        this.api.post(this.todoForm.value.name).subscribe(
            (res) => {
                this.get();
            },
            (err) => console.error('[Network] post error', err)
        );
    }

    ngOnInit() {
        this.store.select(fromStore.getTodos).subscribe((state) => {
            this.todos = state;
        });
        this.get();
    }
}
