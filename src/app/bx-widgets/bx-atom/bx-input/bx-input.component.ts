import { Component, Input, forwardRef } from '@angular/core';
import {
  FormGroup,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';

const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BxInputComponent),
  multi: true,
};
@Component({
  selector: 'app-bx-input',
  templateUrl: './bx-input.component.html',
  styleUrls: ['./bx-input.component.scss'],
  providers: [INPUT_VALUE_ACCESSOR],
})
export class BxInputComponent implements ControlValueAccessor {
  public formControl: FormControl = new FormControl();

  @Input() type: string = '';
  @Input() imageUrl: string = '';
  @Input() placeholder: string = '';
  @Input() style: any;
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() class: string = '';
  @Input() formControlName: string = '';

  @Input() parentForm!: FormGroup;

  private innerValue: any = '';

  writeValue(value: any): void {
    this.formControl.patchValue(value);
  }

  registerOnChange(fn: any): void {
    this.formControl.valueChanges.subscribe((val) => fn(val));
  }

  registerOnTouched(fn: any): void {
    this.formControl.valueChanges.subscribe((val) => fn(val));
  }
}
