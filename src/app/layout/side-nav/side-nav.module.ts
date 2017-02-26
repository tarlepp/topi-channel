import { NgModule } from '@angular/core';
import { YoutubePlayerModule } from 'ng2-youtube-player';

import { SharedModule } from '../../shared/shared.module';
import { SideNavComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
    YoutubePlayerModule,
  ],
  declarations: [
    SideNavComponent,
  ],
  exports: [
    SideNavComponent,
  ],
})

export class SideNavModule { }
