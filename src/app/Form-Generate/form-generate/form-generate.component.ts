import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-generate',
  templateUrl: './form-generate.component.html',
  styleUrls: ['./form-generate.component.scss'],
})
export class FormGenerateComponent implements OnInit {
  generateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.generateForm = this.fb.group({
      name: new FormControl(''),
      label: new FormControl(''),
      type: new FormControl(''),
      controlType: new FormControl(''),
    });
  }

  ngSubmit() {
    if (this.generateForm.invalid) {
      alert('Invalid Form');
    }
    console.log(this.generateForm.value);
    this.generateForm.reset();
  }

  generateFormField(data: any) {}
}
