import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent implements OnInit {
  @Input() control: string;
  @Input() formGroup: FormGroup;
  @Input() type: string;
  @Input() placeholder?: string;
  @Input() label: string;
  @Input() required: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // get f() {
  //   return this.control as FormControl;
  // }
}
