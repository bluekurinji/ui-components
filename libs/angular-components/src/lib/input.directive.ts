import {
  Directive,
  forwardRef,
  ElementRef,
  HostListener
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'goa-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDirective),
      multi: true
    }
  ]
})

export class InputDirective implements ControlValueAccessor {

  private _value = '';

  onChange: (value: string) => void = () => { };
  onTouched: () => void = () => { };

  constructor(private elementRef: ElementRef) { }

  get value() {
    return this._value;
  }

  set value(val: string) {
    if (val !== this._value) {
      this._value = val;
      this.onChange(this._value);
      this.onTouched();
      this.elementRef.nativeElement.value = val;
    }
  }

  @HostListener('_change', ['$event.detail'])
  listenForValueChange(detail: { value: string; }) {
    this.value = detail.value;
  }

  writeValue(value: string) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
}
