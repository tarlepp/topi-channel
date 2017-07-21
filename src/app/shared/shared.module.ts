import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment';

import 'moment/locale/fi';
import 'hammerjs';

import { Directives } from './directives/';
import { Modules } from './modules/';
import { Config } from '../config/config';
import { Services } from './services/';

@NgModule({
  declarations: [
    ...Directives,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    FlexLayoutModule,
    MomentModule,
    ...Modules,
  ],
  providers: [
    Config,
    ...Services,
  ],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    FlexLayoutModule,
    MomentModule,
    ...Directives,
    ...Modules,
  ],
})

export class SharedModule { }
