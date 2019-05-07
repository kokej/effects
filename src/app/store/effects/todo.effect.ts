import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as todoActions from '../actions/todos.actions';
import { Observable } from 'rxjs';
import { switchMap, catchError, tap } from 'rxjs/operators';
import { AppService } from '../../app.service';
import { Todo } from '../../todo';

@Injectable()
export class TodosEffects {
    constructor(private actions$: Actions, private api: AppService) {}

    @Effect()
    todo$: Observable<any> = this.actions$.pipe(
        ofType(todoActions.TODO_GET_ALL),
        switchMap(() => {
            return this.api
                .get()
                .then((todos) => new todoActions.GetAllSuccess(todos), (err) => new todoActions.GetAllFail());
        })
    );
}
