import { Component, OnInit } from '@angular/core';
import { FormInputBase } from '../Model/form-input-base';
import { FormTextbox } from '../Model/form-textbox';
import { Validators } from '@angular/forms';
import { SelectOpt } from '../Model/form-selectOpt';
import { state } from '../Model/states';
import { Radio } from '../Model/form-radio';
import { TextArea } from '../Model/form-textArea';
import { country } from '../Model/countries';
import { CheckBox } from '../Model/form-checkbox';

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

    new FormTextbox({
      key: 'dob',
      label: 'DOB',
      type: 'date',
      required: true,
    }),

    new Radio({
      key: 'gender',
      label: 'Gender',
      type: 'radio',
      required: true,
      options: [
        { key: 'male', value: 'Male' },
        { key: 'female', value: 'Female' },
        { key: 'other', value: 'Other' },
      ],
    }),

    new TextArea({
      key: 'address',
      label: 'Address',
      required: true,
    }),

    new FormTextbox({
      type: 'number',
      key: 'zipCode',
      label: 'ZipCode',
      required: true,
      validators: [Validators.maxLength(3)],
    }),

    new SelectOpt({
      key: 'states',
      label: 'State',
      options: state,
      required: true,
    }),

    new SelectOpt({
      key: 'country',
      label: 'Country',
      options: country,
      required: true,
    }),

    new CheckBox({
      key: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'fishing', value: 'Fishing' },
        { key: 'cooking', value: 'Cooking' },
      ],
    }),

    // new CheckBox({
    //   key: 'terms',
    //   value: 'Agree to terms',
    //   required: true,
    // }),
  ];

  constructor() {}

  ngOnInit(): void {}
}
