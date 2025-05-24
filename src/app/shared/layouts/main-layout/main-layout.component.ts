import {Component, inject} from '@angular/core';

import {NavigationService} from "../../../core/helpers/redirectToHelper";
import {ButtonComponent} from "../../components/button/button.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  private navigate = inject(NavigationService)


  navigateToUsers():void{
    this.navigate.navigateTo("/users")
  }
}
