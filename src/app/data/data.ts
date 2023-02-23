import countries from './countries.json';

export const formField = [
  {
    name: 'name',
    label: 'Name',
    type: 'input',
    fieldType: 'text',
    validation: 'required',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    fieldType: 'email',
    validation: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'input',
    fieldType: 'password',
    validation: 'required',
  },
  {
    name: 'mobile',
    label: 'Mobile',
    type: 'input',
    fieldType: 'number',
    validation: 'required',
  },
  {
    name: 'address',
    label: 'Address',
    type: 'textarea',
    fieldType: '',
    validation: 'required',
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'radio',
    validation: 'required',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
  },
  {
    name: 'country',
    label: 'Country',
    type: 'select',
    validation: 'required',
    optionKey: 'country',
    option: countries,
  },
  {
    name: 'terms',
    type: 'checkbox',
    fieldType: 'checkbox',
    label: 'Agree to terms and conditions',
  },
];

// export interface IControlData {
//   controlName: string;
//   controlType: string;
//   placeholder?: string;
//   dependents?: string[];
//   order?: number;
//   value?: any;
//   DependentKey?: any;
//   options?: Array<{
//     optionName: string;
//     value: string;
//     dependentKey?: any;
//   }>;
//   validators?: {
//     required?: boolean;
//     minlength?: number;
//     maxlength?: number;
//     pattern: string;
//   };
// }

// name
// label
// type   input|textarea
// fieldType
// validation
// optionKey:
// options: {
//     countries: []
//     states:[]
