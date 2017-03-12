import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { VideoQueueModule } from '../../video-queue/video-queue.module';
import { SideNavComponent } from './index';
import { PlayerModule } from '../../player/player.module';

@NgModule({
  imports: [
    SharedModule,
    VideoQueueModule,
  ],
  declarations: [
    SideNavComponent,
  ],
  exports: [
    SideNavComponent,
  ],
})

export class SideNavModule { }
