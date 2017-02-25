import { MessageService } from './message.service';
import { YoutubeApiService } from './youtube-api.service';

export * from './message.service';
export * from './youtube-api.service';

export const Services = [
  MessageService,
  YoutubeApiService,
];
