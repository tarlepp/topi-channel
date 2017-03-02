import { MessageService } from './message.service';
import { PlayerService } from './player.service';
import { VideoQueueService } from './video-queue.service';
import { YoutubeApiService } from './youtube-api.service';

export * from './message.service';
export * from './player.service';
export * from './video-queue.service';
export * from './youtube-api.service';

export const Services = [
  MessageService,
  PlayerService,
  VideoQueueService,
  YoutubeApiService,
];
