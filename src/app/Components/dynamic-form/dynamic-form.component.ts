import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formField } from 'src/app/data/data';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  formField = formField;
  myFormGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {
    let group = {};
    formField.forEach((formTemplate) => {
      group[formTemplate.name] = new FormControl(
        '',
        Validators[formTemplate.validation]
      );
    });
    this.myFormGroup = new FormGroup(group);
  }

  get f() {
    return this.myFormGroup.controls;
  }

  ngSubmit() {
    if (this.myFormGroup.invalid) {
      return;
    }

    console.log(this.myFormGroup.value);
    this.myFormGroup.reset();
  }
}
