import { Component, Input, OnInit } from '@angular/core';
import { FormInputBase } from '../Model/form-input-base';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamicform-controls',
  templateUrl: './dynamicform-controls.component.html',
  styleUrls: ['./dynamicform-controls.component.scss'],
})
export class DynamicformControlsComponent implements OnInit {
  @Input() formFields: FormInputBase<string | boolean>[] | null = [];
  formGrp: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.toFormGroup();
  }

  private toFormGroup(): void {
    const group = {};
    this.formFields.forEach((field) => {
      group[field.key] = field.required
        ? new FormControl(field.value || '', [
            ...field.validators,
            Validators.required,
          ])
        : new FormControl(field.value || '', field.validators);
    });
    console.log('Group', group);
    this.formGrp = new FormGroup(group);
  }

  onSubmit(): void {
    this.formGrp.markAllAsTouched();
    if (this.formGrp.invalid) return;
    alert('Submit formGrp!');
    console.log(this.formGrp.value);
    this.formGrp.reset();
  }
}
