import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ButtonComponent} from "../../button/button.component";
import {SortField, UserSortService} from "../../../../core/services/userSortService/user-sort.service";
import {NgClass, NgIf} from "@angular/common";
import {toSignal} from "@angular/core/rxjs-interop";
import {InputComponent} from "../../input/input.component";
import {
  startSearchByEmail,
  startSearchByName
} from "../../../../store/users/users.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-user-controller',
  standalone: true,
  imports: [
    ButtonComponent,
    NgIf,
    NgClass,
    InputComponent
  ],
  templateUrl: './user-controller.component.html',
  styleUrl: './user-controller.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserControllerComponent {
  private userSort = inject(UserSortService)
  private store = inject(Store)

  sortState = toSignal(this.userSort.sortState$)
  sortBy(field: SortField) {
    this.userSort.sort(field)
  }

  isActive(field: SortField): boolean {
    return this.sortState()?.field === field
  }

  isDesc(field: SortField): boolean {
    return this.isActive(field) && this.sortState()?.direction === 'desc'
  }
  onSearchName(value: string) {
    this.store.dispatch(startSearchByName({ searchName: value }))
  }

  onSearchEmail(value: string) {
    this.store.dispatch(startSearchByEmail({ searchEmail: value }))
  }
}
