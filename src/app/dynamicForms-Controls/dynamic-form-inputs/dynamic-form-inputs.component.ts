import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormInputBase } from '../Model/form-input-base';

@Component({
  selector: 'app-dynamic-form-inputs',
  templateUrl: './dynamic-form-inputs.component.html',
  styleUrls: ['./dynamic-form-inputs.component.scss'],
})
export class DynamicFormInputsComponent implements OnInit {
  @Input() field: FormInputBase<string | boolean>;
  @Input() form: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  get fControls() {
    return this.form as FormGroup;
  }

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }
  get isDirty() {
    return this.form.controls[this.field.key].dirty;
  }

  onChange(e: any) {
    let hobyy = [];
    if (e.target.checked) {
      hobyy.push(e.target.value);
    }
    console.log('Hobby', hobyy);
  }

  // hasFieldError(): boolean {
  //   return (
  //     this.form.get(this.field.key).invalid &&
  //     this.form.get(this.field.key).validator &&
  //     (this.form.get(this.field.key).dirty ||
  //       this.form.get(this.field.key).touched)
  //   );
  // }
}
