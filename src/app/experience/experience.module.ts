import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperiencesListComponent } from './experiences-list/experiences-list.component';
import { ExperienceFormComponent } from './experience-form/experience-form.component';


@NgModule({
  declarations: [ExperiencesListComponent, ExperienceFormComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ]
})
export class ExperienceModule { }
