import {createFeatureSelector, createSelector} from "@ngrx/store";
import { UsersState} from "../../core/models/userModels/userModels";

export const selectUsersFeature = createFeatureSelector<UsersState>('users')
export const selectUsers = createSelector(selectUsersFeature, (state:UsersState )=> state.users)
