import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ChannelRoutingModule } from './channel-routing.module';
import { ChannelComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
    ChannelRoutingModule,
  ],
  declarations: [
    ChannelComponent,
  ],
  exports: [
    ChannelComponent,
  ],
})

export class ChannelModule { }
