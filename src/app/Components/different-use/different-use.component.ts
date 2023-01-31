import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-different-use',
  templateUrl: './different-use.component.html',
  styleUrls: ['./different-use.component.scss'],
})
export class DifferentUseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.minLength(6)]),
    age: new FormControl(''),
    mobile: new FormControl('', [
      Validators.pattern('^((\\+91-?)|0)?[0-9]{9}$'),
    ]),
    gender: new FormControl(''),
    select: new FormControl(''),
    note: new FormArray([]),
    checkbox: new FormControl(false),
  });

  options = [
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'USA' },
    { value: 'uk', label: 'UK' },
  ];

  get f() {
    return this.form;
  }

  Submit() {
    console.log(this.form.value);
    // this.form.reset();
  }

  click() {}
}
