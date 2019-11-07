import { MaterialModule } from './../core/material-module/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInfoRoutingModule } from './basic-info-routing.module';
import { BasicInfoFormComponent } from './basic-info-form/basic-info-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BasicInfoFormComponent],
  imports: [
    CommonModule,
    BasicInfoRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BasicInfoModule { }
