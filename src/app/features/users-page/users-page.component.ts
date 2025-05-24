import {Component, inject, OnInit} from '@angular/core';
import {UserItemComponent} from "../../shared/components/items/user/user-item/user-item.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Store} from "@ngrx/store";
import {selectUsers} from "../../store/users/users.selectors";
import {User} from "../../core/models/userModels/userModels";
import {Observable} from "rxjs";
import {LoaderComponent} from "../../shared/components/loader/loader.component";
import {selectLoading} from "../../store/global/global.selector";
import {loadUsers} from "../../store/users/users.actions";

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [
    UserItemComponent,
    NgForOf,
    AsyncPipe,
    LoaderComponent,
    NgIf
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent implements OnInit{
  private store = inject(Store)
  users$: Observable<User[]> = this.store.select(selectUsers)
  isLoading$: Observable<boolean> = this.store.select(selectLoading)

  ngOnInit(): void {
    this.store.dispatch(loadUsers())
  }
  trackById(index: number, item: User): number {
    return item.id
  }
}
