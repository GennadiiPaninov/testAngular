import {UsersState} from "../../core/models/userModels/userModels";
import {createReducer, on} from "@ngrx/store";
import {loadUsersFailure, loadUsersSuccess, searchByEmail, searchByName, sortUsersByField} from "./users.actions";
import {applySearchFilters} from "../../core/helpers/applySearchFilters";

const initialState: UsersState = {
  users: [],
  originalUsers: [],
  error: null,
  searchName: "",
  searchEmail: ""
}

export const usersReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    originalUsers: users,
    error: null,
    searchName: '',
    searchEmail: ''
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    users: [],
    originalUsers: [],
    error,
    searchName: '',
    searchEmail: ''
  })),
  on(sortUsersByField, (state, { field, direction }) => {
    const filteredUsers = applySearchFilters(state.originalUsers, state.searchName, state.searchEmail);
    const sorted = [...filteredUsers].sort((a, b) => {
      const compare = a[field].localeCompare(b[field])
      return direction === 'asc' ? compare : -compare
    });
    return {
      ...state,
      users: sorted
    }
  }),
  on(searchByName, (state, { searchName }) => ({
    ...state,
    searchName,
    users: applySearchFilters(state.originalUsers, searchName, state.searchEmail)
  })),
  on(searchByEmail, (state, { searchEmail }) => ({
    ...state,
    searchEmail,
    users: applySearchFilters(state.originalUsers, state.searchName, searchEmail)
  }))
)

