import {Routes} from '@angular/router';
import {provideState} from "@ngrx/store";
import {usersReducer} from "./store/users/users.reducer";
import {provideEffects} from "@ngrx/effects";
import {UsersEffects} from "./store/users/users.effects";

export const routes: Routes = [
  {
    path: '',
    title: 'main',
    loadComponent: () => import('./shared/layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent)
  },
  {
    path: 'users',
    title: 'main',
    loadComponent: () => import('./shared/layouts/users-layout/users-layout.component').then(m => m.UsersLayoutComponent),
    providers: [
      provideState('users', usersReducer),
      provideEffects(UsersEffects)
    ]
  },

]
