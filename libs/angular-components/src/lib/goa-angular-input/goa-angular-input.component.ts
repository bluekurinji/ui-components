import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

import {
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'goa-angular-input',
  templateUrl: './goa-angular-input.component.html',
  styleUrls: ['./goa-angular-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GoaAngularInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoaAngularInputComponent implements ControlValueAccessor {

  @HostBinding('attr.id')
  externalId: string | null = '';

  private _id = '';

  @Input()
  set nativeComponentId(value: string) {
    this._id = value;
    this.externalId = null;
  }

  get nativeComponentId() {
    return this._id;
  }

  @Output()
  valueChanged: EventEmitter<string | undefined | null> = new EventEmitter();

  private _name = '';

  @Input()
  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  private _value = '';

  onChange: (value: string) => void = () => { };
  onTouched: () => void = () => { };

  get value() {
    return this._value;
  }

  set value(val: string) {
    if (val !== this._value) {
      this._value = val;
      this.valueChanged.emit(this._value);
      this.onChange(this._value);
      this.onTouched();
    }
  }

  constructor(private _changeDetector: ChangeDetectorRef) { }

  @HostListener('_change', ['$event.detail'])
  listenForValueChange(detail: { value: string; }) {
    this.value = detail.value;
  }

  writeValue(value: string) {
    if (value) {
      this.value = value;
      this._changeDetector.detectChanges();
    }
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  onChangeHandler(e: any) {
    console.log(e.detail.value);
    this.value = e.detail.value;
  }

}
