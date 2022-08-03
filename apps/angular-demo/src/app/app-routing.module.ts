import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputComponentComponent } from './input-component/input-component.component';

const routes: Routes = [
  { path: 'input', component: InputComponentComponent },
  { path: '', redirectTo: '/input', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
