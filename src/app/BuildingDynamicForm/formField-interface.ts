import { ValidatorFn } from '@angular/forms';

export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  name: string;
  label: string;
  type: string;
  fieldType?: string;
  placeholder?: string;
  value?: any;
  option?: any[];
  optionKey?: any[];
  required?: boolean;
  // validators?: Validator[];
}

// export interface formfield {
//   name: string;
//   label: string;
//   type: string;
//   placeholder: string;
//   options: string[];
//   completed: validation;
// }

// export interface validation {
//   required: boolean;
//   min: number;
//   max: number;
//   pattern: string;
// }
