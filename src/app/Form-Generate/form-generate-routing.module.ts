import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGenerateComponent } from './form-generate/form-generate.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

const routes: Routes = [
  {
    path: '',
    component: FormGenerateComponent,
  },
  // {
  //   path: 'demo',
  //   component: FormDemoComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormGenerateRoutingModule {}
