import { MaterialModule } from './material-module/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class CoreModule { }
