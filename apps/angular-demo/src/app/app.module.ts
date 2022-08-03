import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import '@abgov/angular-components';
import { InputComponentComponent } from './input-component/input-component.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';
import { AngularComponentsModule } from '@abgov/angular-components';
@NgModule({
  declarations: [AppComponent, InputComponentComponent, NavigationLinkComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
