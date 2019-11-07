import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguagesRoutingModule } from './languages-routing.module';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { LanguageFormComponent } from './language-form/language-form.component';


@NgModule({
  declarations: [LanguagesListComponent, LanguageFormComponent],
  imports: [
    CommonModule,
    LanguagesRoutingModule
  ]
})
export class LanguagesModule { }
