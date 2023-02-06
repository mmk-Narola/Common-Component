import { FormInputBase } from './form-input-base';

export class SelectOpt extends FormInputBase<string> {
  override controlType = 'select';
}
