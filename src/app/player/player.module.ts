import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PlayerComponent, PlayerService } from './';
import { YoutubePlayerModule } from 'ng2-youtube-player';

@NgModule({
  imports: [
    SharedModule,
    YoutubePlayerModule,
  ],
  declarations: [
    PlayerComponent,
  ],
  providers: [
    PlayerService,
  ],
  exports: [
    PlayerComponent,
  ],
})

export class PlayerModule { }
