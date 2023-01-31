import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checbox',
  templateUrl: './checbox.component.html',
  styleUrls: ['./checbox.component.scss'],
})
export class ChecboxComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() required: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
