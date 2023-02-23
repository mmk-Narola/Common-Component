import { Validators } from '@angular/forms';
import { country } from '../dynamicForms-Controls/Model/countries';
import { FieldConfig } from './formField-interface';

export const formFieldData: FieldConfig[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'input',
    fieldType: 'text',
    required: true,
  },
  {
    name: 'lastname',
    label: 'Last Name',
    type: 'input',
    fieldType: 'text',
  },

  {
    name: 'email',
    label: 'Email',
    type: 'input',
    fieldType: 'email',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'input',
    fieldType: 'password',
    required: true,
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'radio',
    required: true,
    option: [
      { key: 'male', value: 'Male' },
      { key: 'female', value: 'Female' },
    ],
  },
  {
    name: 'country',
    label: 'Country',
    type: 'select',
    required: true,
    option: country,
  },
  {
    name: 'hobby',
    label: 'Hobby',
    type: 'checkbox',
    required: true,
    option: [
      { key: 'f', value: 'Fishing' },
      { key: 'c', value: 'Cooking' },
    ],
  },
];
