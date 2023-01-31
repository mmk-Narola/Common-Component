import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reusable-element',
  templateUrl: './reusable-element.component.html',
  styleUrls: ['./reusable-element.component.scss'],
})
export class ReusableElementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    age: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    gender: new FormControl('', [Validators.required]),
    select: new FormControl('', [Validators.required]),
    checkbox: new FormControl(false, [Validators.required]),
  });

  options = [
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'USA' },
    { value: 'uk', label: 'UK' },
  ];

  radioValue = [
    {
      name: 'Male',
      value: 'male',
      control: this.form.controls['gender'],
    },
    {
      name: 'Female',
      value: 'female',
      control: this.form.controls['gender'],
    },
    {
      name: 'Other',
      value: 'other',
      control: this.form.controls['gender'],
    },
  ];

  data = [
    { Name: 'MMK', Age: 22, City: 'New York', Department: 'JS' },
    { Name: 'YKP', Age: 23, City: 'Los Angeles', Department: 'JS' },
    { Name: 'DNA', Age: 25, City: 'Chicago', Department: 'DotNet' },
  ];
  columns = ['Name', 'Age', 'City', 'Department'];

  inputFieldControl = [
    {
      type: 'text',
      control: this.form.controls['name'],
      placeholder: 'Enter  Name',
      lable: 'Name',
    },

    {
      type: 'email',
      control: this.form.controls['email'],
      placeholder: 'Enter  Email',
      lable: 'Email',
    },

    {
      type: 'password',
      control: this.form.controls['password'],
      placeholder: 'Enter Password',
      lable: 'Password',
    },
    {
      type: 'date',
      control: this.form.controls['age'],
      placeholder: 'Enter DOB',
      lable: 'DOB',
    },
    {
      type: 'number',
      control: this.form.controls['mobile'],
      placeholder: 'Enter Mobile Number',
      lable: 'Mobile',
    },
  ];

  Submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    }
  }
}

// <div *ngIf="formControl.invalid && formControl.touched">
//       <div *ngIf="formControl.errors.required">
//         This field is required
//       </div>
//     </div>

//  formControl = new FormControl('', [Validators.required]);
