import { NgModule } from '@angular/core';
import { MdButtonModule, MdIconModule, MdSidenavModule, MdSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdSnackBarModule,
  ],
  exports: [
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdSnackBarModule,
  ],
})

export class MaterialModule { }