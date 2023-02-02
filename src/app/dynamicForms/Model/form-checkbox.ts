import { FormInputBase } from './form-input-base';

export class CheckBox extends FormInputBase<string> {
  override controlType = 'checkbox';
}
