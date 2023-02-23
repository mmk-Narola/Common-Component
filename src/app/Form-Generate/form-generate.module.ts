import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGenerateRoutingModule } from './form-generate-routing.module';
import { FormGenerateComponent } from './form-generate/form-generate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDemoComponent } from './form-demo/form-demo.component';

@NgModule({
  declarations: [FormGenerateComponent, FormDemoComponent],
  imports: [
    CommonModule,
    FormGenerateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class FormGenerateModule {}
