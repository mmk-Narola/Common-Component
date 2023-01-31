import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { formField } from 'src/app/data/data';

@Component({
  selector: 'app-reusable-form',
  templateUrl: './reusable-form.component.html',
  styleUrls: ['./reusable-form.component.scss'],
})
export class ReusableFormComponent implements OnInit {
  formElement = [];
  formGroup: FormGroup;
  note: any;

  constructor() {}

  ngOnInit(): void {
    let group = {};
    this.note = new FormArray([]);
    this.formElement = formField;
    this.formElement.forEach((formTemplate) => {
      group[formTemplate.name] = new FormControl(
        '',
        Validators[formTemplate.validation]
      );
    });
    this.formGroup = new FormGroup(group, this.note);
  }

  Submit() {
    if (this.formGroup.invalid) {
      return;
    }
    console.log(this.formGroup.value);
    this.formGroup.reset();
  }
}

//  this.formGroup = this.fb.group({});
//     this.numberOfControls.forEach((control, index) => {
//       this.formGroup.addControl(`control${index}`, new FormControl(''));
//     });

//     console.log(this.formGroup.controls);

//     // this.formGroup = this.fb.group({});
//     // const formFields = this.formElement.forEach(
//     //   (controlName: any, index: any) => {
//     //     this.formGroup.addControl(controlName, new FormControl(''));
//     //   }
//     // );
//  formField.map((field) => {
//    return {
//      ...field,
//      control: new FormControl('', Validators[field.validation]),
//    };
//  });

// const FormControlName = formField.map((formControl: any) => {
//   return {
//     control: formControl.name,
//     validation: formControl.validation,
//   };
// });

// console.log('FormControl Name:', FormControlName);
// this.formGroup = this.fb.group({
//   name: new FormControl('', [Validators.required]),
//   email: new FormControl('', [Validators.email]),
//   password: new FormControl('', [Validators.required]),
//   address: new FormControl('', [Validators.required]),
//   gender: new FormControl('', [Validators.required]),
//   country: new FormControl('', [Validators.required]),
// });
