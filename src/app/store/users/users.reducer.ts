import {UsersState} from "../../core/models/userModels/userModels";
import {createReducer, on} from "@ngrx/store";
import {loadUsersFailure, loadUsersSuccess, sortUsersByField} from "./users.actions";

const initialState: UsersState = {
  users: [],
  error: null
}

export const usersReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    error: null
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    users: [],
    error
  })),
  on(sortUsersByField, (state, { field, direction }) => {
    const sorted = [...state.users].sort((a, b) => {
      const compare = a[field].localeCompare(b[field])

      return direction === 'asc' ? compare : -compare
    })

    return {
      ...state,
      users: sorted
    }
  })
)
