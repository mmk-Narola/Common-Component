import { FormInputBase } from './form-input-base';

export class Radio extends FormInputBase<string> {
  override controlType = 'radio';
}
