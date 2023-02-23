import { Component, Input, OnInit } from '@angular/core';
import { FormInputBase } from '../Model/form-input-base';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamicform-controls',
  templateUrl: './dynamicform-controls.component.html',
  styleUrls: ['./dynamicform-controls.component.scss'],
})
export class DynamicformControlsComponent implements OnInit {
  @Input() formFields: FormInputBase<string | boolean>[] | null = [];
  formGrp: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.toFormGroup();
  }

  private toFormGroup(): void {
    //Method-1
    const group = {};
    this.formFields.forEach((field) => {
      group[field.key] = field.required
        ? new FormControl('', [...field.validators, Validators.required])
        : new FormControl('', field.validators);
    });
    this.formGrp = new FormGroup(group);

    console.log(this.formGrp);
  }

  onSubmit(): void {
    this.formGrp.markAllAsTouched();
    if (this.formGrp.invalid) return;
    console.log(this.formGrp.value);
    this.formGrp.reset();
  }
}

//Method-2
// this.formGrp = this.formBuilder.group({});
// this.formFields.forEach((formTemplate) => {
//   this.formGrp.addControl(
//     formTemplate.key,
//     new FormControl('', formTemplate.validators)
//   );
// });

// const group = {};
// this.formFields.forEach((field) => {
//   group[field.key] = field.required
//     ? new FormControl(field.value || '', [
//         ...field.validators,
//         Validators.required,
//       ])
//     : new FormControl(field.value || '', field.validators);
// });
// this.formGrp = new FormGroup(group);
