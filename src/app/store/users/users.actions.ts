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
