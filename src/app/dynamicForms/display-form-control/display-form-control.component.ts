import { Component, OnInit } from '@angular/core';
import { FormInputBase } from '../Model/form-input-base';
import { FormTextbox } from '../Model/form-textbox';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-display-form-control',
  templateUrl: './display-form-control.component.html',
  styleUrls: ['./display-form-control.component.scss'],
})
export class DisplayFormControlComponent implements OnInit {
  myForm: FormInputBase<string | boolean>[] = [
    new FormTextbox({
      key: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    }),
    new FormTextbox({
      key: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      validators: [Validators.email],
    }),
    new FormTextbox({
      key: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      validators: [Validators.minLength(6)],
    }),
  ];

  constructor() {}

  ngOnInit(): void {}
}
