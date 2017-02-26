import { NgModule } from '@angular/core';
import { YoutubePlayerModule } from 'ng2-youtube-player';

import { SharedModule } from '../../shared/shared.module';
import { VideoQueueModule } from '../../video-queue/video-queue.module';
import { SideNavComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
    YoutubePlayerModule,
    VideoQueueModule
  ],
  declarations: [
    SideNavComponent,
  ],
  exports: [
    SideNavComponent,
  ],
})

export class SideNavModule { }
