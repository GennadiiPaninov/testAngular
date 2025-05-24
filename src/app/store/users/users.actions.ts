import {createAction, props} from "@ngrx/store";
import {User} from "../../core/models/userModels/userModels";

export const loadUsers = createAction(' Load Users')
export const loadUsersSuccess = createAction(
  'Load Users Success',
  props<{ users: User[] }>()
)
export const loadUsersFailure = createAction(
  'Load Users Failure',
  props<{ error: string }>()
)
export const sortUsersByField = createAction('sort users by',
  props<{ field: "email" | "name", direction: 'asc' | 'desc'}>()
)
export const searchByName = createAction(
  '[Users Page] Search By Name',
  props<{ searchName: string }>()
)
export const searchByEmail = createAction(
  '[Users Page] Search By Email',
  props<{ searchEmail: string }>()
)
export const startSearchByName = createAction(
  '[Users Page] Start Search By Name',
  props<{ searchName: string }>()
)
export const startSearchByEmail = createAction(
  '[Users Page] Start Search By Email',
  props<{ searchEmail: string }>()
)
