import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {User} from "../../../../../core/models/userModels/userModels";

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserItemComponent {
  @Input()user!: User
}
