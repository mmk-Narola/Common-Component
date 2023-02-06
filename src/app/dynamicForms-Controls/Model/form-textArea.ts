import { FormInputBase } from './form-input-base';

export class TextArea extends FormInputBase<string> {
  override controlType = 'textarea';
}
