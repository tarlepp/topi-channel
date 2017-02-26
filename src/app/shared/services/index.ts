import { MessageService } from './message.service';
import { VideoQueueService } from './video-queue.service';
import { YoutubeApiService } from './youtube-api.service';

export * from './message.service';
export * from './video-queue.service';
export * from './youtube-api.service';

export const Services = [
  MessageService,
  VideoQueueService,
  YoutubeApiService,
];
