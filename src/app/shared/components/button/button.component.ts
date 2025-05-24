import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, NgClass} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter<void>()
  @Input() variant: "common" | "sort"  = "common"
  handleClick(){
    this.clicked.emit()
  }
}
