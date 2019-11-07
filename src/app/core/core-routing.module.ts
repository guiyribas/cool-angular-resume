import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'basic-info',
        loadChildren: () =>
          import('../basic-info/basic-info.module').then(m => m.BasicInfoModule)
      },
      {
        path: 'experiences',
        loadChildren: () =>
          import('../experience/experience.module').then(
            m => m.ExperienceModule
          )
      },
      {
        path: 'languages',
        loadChildren: () =>
          import('../languages/languages.module').then(m => m.LanguagesModule)
      },
      {
        path: 'skills',
        loadChildren: () =>
          import('../skills/skills.module').then(m => m.SkillsModule)
      },
      {
        path: 'summary',
        loadChildren: () =>
          import('../summary/summary.module').then(m => m.SummaryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
