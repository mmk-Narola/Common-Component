import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DifferentUseComponent } from './Components/different-use/different-use.component';
import { ReusableElementComponent } from './Components/reusable-element/reusable-element.component';
import { InfoComponent } from './Components/info/info.component';
import { ReusableFormComponent } from './Components/reusable-form/reusable-form.component';
import { DynamicFormComponent } from './Components/dynamic-form/dynamic-form.component';
import { DisplayFormControlComponent } from './dynamicForms-Controls/display-form-control/display-form-control.component';
import { BuildingformComponent } from './BuildingDynamicForm/buildingform/buildingform.component';

const routes: Routes = [
  { path: '', component: InfoComponent },
  // { path: 'method1', component: ReusableElementComponent },
  // { path: 'method2', component: DifferentUseComponent },
  { path: 'reusable-form', component: ReusableFormComponent },
  { path: 'dynamicForm-field', component: DynamicFormComponent },
  { path: 'dynamicForm-control', component: DisplayFormControlComponent },
  { path: 'BuildingForm', component: BuildingformComponent },
  {
    path: 'form',
    loadChildren: () =>
      import('./Form-Generate/form-generate.module').then(
        (m) => m.FormGenerateModule
      ),
    // loadChildren: () =>
    //   import('./DynamicForm-ReusableCom/reusablecom-form.module').then(
    //     (m) => m.ReusablecomFormModule
    //   ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
