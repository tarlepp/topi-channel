import { VideoItemIdInterface } from './video-item-id.interface';
import { VideoItemSnippetInterface } from './video-item-snippet.interface';

export interface VideoItemInterface {
  kind: string;
  etag: string;
  id: VideoItemIdInterface;
  snippet: VideoItemSnippetInterface;
  channelTitle: string;
  liveBroadcastContent: string;
}
