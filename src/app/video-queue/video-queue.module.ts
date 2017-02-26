import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { VideoQueueComponent, ThumbnailComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    VideoQueueComponent,
    ThumbnailComponent,
  ],
  exports: [
    VideoQueueComponent,
  ],
})

export class VideoQueueModule { }
