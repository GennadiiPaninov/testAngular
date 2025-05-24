// user-sort.service.ts
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { sortUsersByField } from '../../../store/users/users.actions';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { toggleLoader } from '../../../store/global/global.actions';

export type SortField = 'email' | 'name'
export type SortDirection = 'asc' | 'desc'

export interface SortState {
  field: SortField | null
  direction: SortDirection | null
}

@Injectable({ providedIn: 'any' })
export class UserSortService {
  private store = inject(Store)

  private sortInput$ = new BehaviorSubject<SortField | null>(null)

  private _sortState = new BehaviorSubject<SortState>({
    field: null,
    direction: null
  })
  sortState$ = this._sortState.asObservable()

  constructor() {
    this.sortInput$
      .pipe(debounceTime(300))
      .subscribe(field => {

        if (!field) return

        const current = this._sortState.value
        const newDirection: SortDirection =
          current.field === field && current.direction === 'asc' ? 'desc' : 'asc'

        const newState: SortState = { field, direction: newDirection }
        this._sortState.next(newState)

        this.store.dispatch(sortUsersByField(newState as {field: SortField, direction: SortDirection }))
        this.store.dispatch(toggleLoader({ isLoading: false }))
      });

  }

  sort(field: SortField) {
    this.store.dispatch(toggleLoader({ isLoading: true }))
    this.sortInput$.next(field)
  }
}
