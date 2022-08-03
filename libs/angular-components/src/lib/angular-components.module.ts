import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';

import { GoaAngularInputComponent } from './goa-angular-input/goa-angular-input.component';

@NgModule({
  imports: [CommonModule, OverlayModule],
  exports: [
    FormsModule,
    OverlayModule,
    CommonModule,
    GoaAngularInputComponent
  ],
  declarations: [
    GoaAngularInputComponent
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AngularComponentsModule { }
