import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// interface Option {
//   value: any;
//   label: string;
// }

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
})
export class SelectOptionComponent implements OnInit {
  // @Input() control: FormControl<any>;
  @Input() control: string;
  @Input() formGroup: FormGroup;
  @Input() options: any[];
  @Input() label: string;
  @Input() required: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
