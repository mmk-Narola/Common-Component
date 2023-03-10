import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './Components/input-field/input-field.component';
import { RadioButtonComponent } from './Components/radio-button/radio-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChecboxComponent } from './Components/checbox/checbox.component';
import { SelectOptionComponent } from './Components/select-option/select-option.component';
import { TableComponent } from './Components/table/table.component';
import { DifferentUseComponent } from './Components/different-use/different-use.component';
import { ReusableElementComponent } from './Components/reusable-element/reusable-element.component';
import { InfoComponent } from './Components/info/info.component';
import { FormArrayComponent } from './Components/form-array/form-array.component';
import { ReusableFormComponent } from './Components/reusable-form/reusable-form.component';
import { DynamicFormComponent } from './Components/dynamic-form/dynamic-form.component';
// import { DynamicformFieldModule } from './Components/dynamicform-field.module';
import { DynamicformControlsComponent } from './dynamicForms-Controls/dynamicform-controls/dynamicform-controls.component';
import { DynamicFormInputsComponent } from './dynamicForms-Controls/dynamic-form-inputs/dynamic-form-inputs.component';
import { DisplayFormControlComponent } from './dynamicForms-Controls/display-form-control/display-form-control.component';
import { BuildingformComponent } from './BuildingDynamicForm/buildingform/buildingform.component';
// import { BuildingformComponent } from '';
// import { DynamicformControlsComponent } from './dynamicForms/dynamicform-controls/dynamicform-controls.component';
// import { DynamicFormInputsComponent } from './dynamicForms/dynamic-form-inputs/dynamic-form-inputs.component';
// import { DisplayFormControlComponent } from './dynamicForms/display-form-control/display-form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    RadioButtonComponent,
    SelectOptionComponent,
    ChecboxComponent,
    TableComponent,
    FormArrayComponent,
    DifferentUseComponent,
    ReusableElementComponent,
    InfoComponent,
    ReusableFormComponent,
    DynamicformControlsComponent,
    DynamicFormInputsComponent,
    DisplayFormControlComponent,
    DynamicFormComponent,
    BuildingformComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
