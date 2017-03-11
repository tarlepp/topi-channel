import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { VideoQueueComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    VideoQueueComponent,
  ],
  exports: [
    VideoQueueComponent,
  ],
})

export class VideoQueueModule { }
