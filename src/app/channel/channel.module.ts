import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ChannelComponent } from './index';
import { ChannelRoutingModule } from './channel-routing.module';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

@NgModule({
  imports: [
    SharedModule,
    ChannelRoutingModule,
  ],
  declarations: [
    ChannelComponent,
    ThumbnailComponent,
  ],
  exports: [
    ChannelComponent,
  ],
})

export class ChannelModule { }
