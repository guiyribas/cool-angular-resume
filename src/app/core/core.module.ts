import { MaterialModule } from './material-module/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './layout/alert/alert.component';
import { ConfirmationDialogComponent } from './layout/confirmation-dialog/confirmation-dialog.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidemenuComponent } from './layout/sidemenu/sidemenu.component';
import { SidemenuItemComponent } from './layout/sidemenu-item/sidemenu-item.component';


@NgModule({
  declarations: [LayoutComponent, AlertComponent, ConfirmationDialogComponent, FooterComponent, HeaderComponent, SidemenuComponent, SidemenuItemComponent],
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
