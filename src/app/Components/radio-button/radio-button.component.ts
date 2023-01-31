import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {
  // @Input() control: FormControl;
  @Input() control: string;
  @Input() formGroup: FormGroup;
  @Input() value: any;
  @Input() label: string;

  constructor() {}

  ngOnInit(): void {}
}
