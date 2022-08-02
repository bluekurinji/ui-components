import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';

import { InputDirective } from './input.directive';

@NgModule({
  imports: [CommonModule, OverlayModule],
  exports: [
    FormsModule,
    OverlayModule,
    CommonModule,
    InputDirective
  ],
  declarations: [
    InputDirective
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AngularComponentsModule { }
