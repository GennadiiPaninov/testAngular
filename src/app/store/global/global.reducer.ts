import {createReducer, on} from "@ngrx/store";
import {toggleLoader} from "./global.actions";


export interface GlobalState {
  isLoading: boolean

}
export const initialState: GlobalState = {
  isLoading: false,
}
export const globalReducer = createReducer(
  initialState,
  on(toggleLoader, (state, props) => {
    return {...state, isLoading: props.isLoading === undefined ? !state.isLoading : props.isLoading}
  }),

)
