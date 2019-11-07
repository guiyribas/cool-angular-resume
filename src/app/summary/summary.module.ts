import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryFormComponent } from './summary-form/summary-form.component';


@NgModule({
  declarations: [SummaryFormComponent],
  imports: [
    CommonModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
