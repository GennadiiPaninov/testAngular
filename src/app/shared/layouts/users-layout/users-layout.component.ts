import {Component, inject} from '@angular/core';
import {UsersPageComponent} from "../../../features/users-page/users-page.component";
import {UserControllerComponent} from "../../components/controllers/user-controller/user-controller.component";
import {LoaderComponent} from "../../components/loader/loader.component";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectLoading} from "../../../store/global/global.selector";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-users-layout',
  standalone: true,
  imports: [
    UsersPageComponent,
    UserControllerComponent,
    LoaderComponent,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './users-layout.component.html',
  styleUrl: './users-layout.component.scss'
})
export class UsersLayoutComponent {

  private store = inject(Store)
  isLoading$: Observable<boolean> = this.store.select(selectLoading)

}
