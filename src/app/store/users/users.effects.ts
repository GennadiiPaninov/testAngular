import {Injectable, inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {concat, debounceTime, of} from 'rxjs';

import {loadUsers, loadUsersSuccess, loadUsersFailure} from './users.actions';
import {UsersService} from "../../core/services/usersService/users.service";
import {toggleLoader} from "../global/global.actions";

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions)
  private usersService = inject(UsersService)

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        concat(
          of(toggleLoader({isLoading: true})),
          this.usersService.getUsers().pipe(
            map(users => loadUsersSuccess({users})),
            catchError(error => of(loadUsersFailure({error: error.message})))
          ),
          of(toggleLoader({isLoading: false}))
        )
      )
    )
  );
}
