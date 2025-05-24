import {
  Component,
  Input,
  forwardRef, inject, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {CommonModule, NgClass, NgIf} from '@angular/common';
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [CommonModule, NgClass, NgIf, ButtonComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor {
  @Input() label = ''
  @Input() type: string = 'text'
  @Input() placeholder = ''
  @Input() id: string = crypto.randomUUID()
  @Input() formControlName?: string;
  @Input() autocomplete: string = 'off'
  @Output() valueChange = new EventEmitter<string>();

  value: string = ''
  disabled = false
  showError: boolean = false
  private cdr = inject(ChangeDetectorRef)

  private onChange = (value: string) => {}
  private onTouched: () => void = () => {}

  writeValue(value: string): void {
    this.value = value
    this.cdr.markForCheck()
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onBlur(): void {
    this.onTouched()
  }
  onFocus(): void {}
  onInput(event: Event) {
    const target = event.target as HTMLInputElement
    this.value = target.value
    this.onChange(this.value)
    this.valueChange.emit(this.value);
    this.onTouched()
  }
}
