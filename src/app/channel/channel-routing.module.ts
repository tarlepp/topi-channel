import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChannelComponent } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'Channel',
        component: ChannelComponent,
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class ChannelRoutingModule { }
