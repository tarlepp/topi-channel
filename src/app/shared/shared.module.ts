import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment';

import 'moment/locale/fi';
import 'hammerjs';

import { Directives } from './directives/';
import { Config } from '../config/config';
import { Services } from './services/';

@NgModule({
  declarations: [
    ...Directives,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    MomentModule,
  ],
  providers: [
    MdIconRegistry,
    Config,
    ...Services,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    MomentModule,
    ...Directives,
  ],
})

export class SharedModule { }
