import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() arrayItems: FormArray;

  constructor() {}

  ngOnInit(): void {}

  addControl() {
    this.arrayItems.push(new FormControl(''));
  }

  Remove(index: number) {
    this.arrayItems.removeAt(index);
  }
}
