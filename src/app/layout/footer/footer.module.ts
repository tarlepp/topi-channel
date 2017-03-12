import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { PlayerModule } from '../../player/player.module';
import { FooterComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
    PlayerModule,
  ],
  declarations: [
    FooterComponent,
  ],
  exports: [
    FooterComponent,
  ],
})

export class FooterModule { }
