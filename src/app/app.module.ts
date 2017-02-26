import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ChannelModule } from './channel/channel.module';
import { LayoutModule } from './layout/layout.module';
import { VideoQueueModule } from './video-queue/video-queue.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    ChannelModule,
    VideoQueueModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }
