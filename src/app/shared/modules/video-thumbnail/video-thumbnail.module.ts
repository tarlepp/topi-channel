import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { VideoThumbnailComponent } from './video-thumbnail.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    MomentModule,
  ],
  declarations: [
    VideoThumbnailComponent,
  ],
  exports: [
    VideoThumbnailComponent,
  ],
})

export class VideoThumbnailModule { }
