import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillFormComponent } from './skill-form/skill-form.component';


@NgModule({
  declarations: [SkillsListComponent, SkillFormComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
