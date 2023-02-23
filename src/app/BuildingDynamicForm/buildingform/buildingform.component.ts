import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { formFieldData } from '../fieldsData';

@Component({
  selector: 'app-buildingform',
  templateUrl: './buildingform.component.html',
  styleUrls: ['./buildingform.component.scss'],
})
export class BuildingformComponent implements OnInit {
  dynamicFrom: FormGroup;
  buildingForm = formFieldData;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.BuildFormControl();
  }

  private BuildFormControl() {
    // const group = this.fb.group({});
    // this.buildingForm.forEach((abc) => {
    //   const control = this.fb.control(
    //     abc.name,
    //     this.bindValidations(abc.validators || [])
    //   );
    //   group.addControl(abc.name, control);
    // });
    // return group;

    let group = {};
    this.buildingForm.forEach((field) => {
      group[field.name] = field.required
        ? new FormControl('', [Validators.required])
        : new FormControl('');

      // group[ele.name] = ele.validators.required
      //   ? new FormControl('', [
      //       Validators.required,
      //       Validators.minLength(ele.validators.minlength),
      //     ])
      //   : new FormControl('');
    });
    this.dynamicFrom = new FormGroup(group);
  }

  // bindValidations(validations: any) {
  //   if (validations.length > 0) {
  //     const validList = [];
  //     validations.forEach((valid) => {
  //       validList.push(valid.validator);
  //     });
  //     return Validators.compose(validList);
  //   }
  //   return null;
  // }

  Submit() {
    if (this.dynamicFrom.invalid) {
      return;
    }
    console.log(this.dynamicFrom.value);
  }
}

//  createControl() {
//     const group = this.fb.group({});
//     this.buildingForm.forEach((abc) => {
//       const control = this.fb.control(
//         abc.name,
//         this.bindValidations(abc.validators || [])
//       );
//       group.addControl(abc.name, control);
//     });
//     console.log(group);
//     return group;
//   }

//   bindValidations(validations: any) {
//     if (validations.length > 0) {
//       const validList = [];
//       validations.forEach((valid) => {
//         validList.push(valid.validator);
//       });
//       return Validators.compose(validList);
//     }
//     return null;
//   }
