import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ChannelComponent } from './index';
import { ChannelRoutingModule } from './channel-routing.module';

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
