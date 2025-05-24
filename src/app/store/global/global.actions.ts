import {createAction, props} from "@ngrx/store";

export const toggleLoader = createAction("toggle loader", props<{isLoading: boolean | undefined }>())


